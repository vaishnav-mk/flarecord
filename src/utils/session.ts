import { GatewayOpcode } from "../types/constants";
import { GatewayPayload, GatewayState, ResumeData, IdentifyData } from "../types";
import type { DurableObjectState } from "@cloudflare/workers-types";

export class SessionManager {
  constructor(
    private token: string,
    private ctx: DurableObjectState,
    private storageKey: string,
    private identifyProperties: {
      os: string;
      browser: string;
      device: string;
    },
    private sendFn: (payload: GatewayPayload) => void
  ) {}

  async getResumeData(): Promise<{ sessionId: string; sequence: number } | null> {
    const state = await this.getState();
    if (state?.sessionId && state.sequence !== null) {
      return { sessionId: state.sessionId, sequence: state.sequence };
    }
    return null;
  }

  sendResume(sessionId: string, sequence: number): void {
    const resume: GatewayPayload = {
      op: GatewayOpcode.RESUME,
      d: {
        token: this.token,
        session_id: sessionId,
        seq: sequence,
      } satisfies ResumeData,
    };
    this.sendFn(resume);
  }

  sendIdentify(intents: number): void {
    const identify: GatewayPayload = {
      op: GatewayOpcode.IDENTIFY,
      d: {
        token: this.token,
        properties: this.identifyProperties,
        intents: intents,
      } satisfies IdentifyData,
    };
    this.sendFn(identify);
  }

  private async getState(): Promise<GatewayState | null> {
    const state = await this.ctx.storage.get(this.storageKey);
    return this.validateState(state);
  }

  private validateState(state: unknown): GatewayState | null {
    if (state === null || state === undefined) {
      return null;
    }
    if (typeof state === "object" && "heartbeatInterval" in state) {
      return state as GatewayState;
    }
    return null;
  }
}

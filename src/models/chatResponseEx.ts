/**
 * Cuadra AILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  lazy,
  number,
  optional,
  Schema,
  string,
  typedExpandoObject,
  unknown,
} from '../schema';
import { UsageEx, usageExSchema } from './usageEx';

export interface ChatResponseEx {
  /** Output generated by the AI to resolve the request */
  output?: string;
  /** Confidence score of how accurate is the output regarding your request */
  confidenceScore?: number;
  /** Model used to resolve your query */
  model?: string;
  /** This is the token usage result of your request */
  usage?: UsageEx;
  additionalProperties?: Record<string, unknown>;
}

export const chatResponseExSchema: Schema<ChatResponseEx> = typedExpandoObject(
  {
    output: ['output', optional(string())],
    confidenceScore: ['confidenceScore', optional(number())],
    model: ['model', optional(string())],
    usage: ['usage', optional(lazy(() => usageExSchema))],
  },
  'additionalProperties',
  optional(unknown())
);

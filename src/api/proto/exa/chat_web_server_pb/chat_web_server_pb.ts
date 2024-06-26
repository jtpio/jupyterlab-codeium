// Copyright Exafunction, Inc.

// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file exa/chat_web_server_pb/chat_web_server.proto (package exa.chat_web_server_pb, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ChatFeedbackType, ChatMessage } from "../chat_pb/chat_pb.js";
import { CodeContextItem, CodeContextType, GitRepoInfo, Metadata, UserSettings, UserStatus } from "../codeium_common_pb/codeium_common_pb.js";
import { DiffBlock } from "../diff_action_pb/diff_action_pb.js";
import { GetChatMessageRequest, RecordChatFeedbackRequest } from "../language_server_pb/language_server_pb.js";

/**
 * The type of client that is connecting to the web server.
 *
 * @generated from enum exa.chat_web_server_pb.ClientConnectionType
 */
export enum ClientConnectionType {
  /**
   * @generated from enum value: CLIENT_CONNECTION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: CLIENT_CONNECTION_TYPE_CHAT = 1;
   */
  CHAT = 1,

  /**
   * @generated from enum value: CLIENT_CONNECTION_TYPE_IDE = 2;
   */
  IDE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ClientConnectionType)
proto3.util.setEnumType(ClientConnectionType, "exa.chat_web_server_pb.ClientConnectionType", [
  { no: 0, name: "CLIENT_CONNECTION_TYPE_UNSPECIFIED" },
  { no: 1, name: "CLIENT_CONNECTION_TYPE_CHAT" },
  { no: 2, name: "CLIENT_CONNECTION_TYPE_IDE" },
]);

/**
 * @generated from enum exa.chat_web_server_pb.ActiveEditorType
 */
export enum ActiveEditorType {
  /**
   * @generated from enum value: ACTIVE_EDITOR_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ACTIVE_EDITOR_TYPE_TEXT_EDITOR = 1;
   */
  TEXT_EDITOR = 1,

  /**
   * @generated from enum value: ACTIVE_EDITOR_TYPE_TERMINAL = 2;
   */
  TERMINAL = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ActiveEditorType)
proto3.util.setEnumType(ActiveEditorType, "exa.chat_web_server_pb.ActiveEditorType", [
  { no: 0, name: "ACTIVE_EDITOR_TYPE_UNSPECIFIED" },
  { no: 1, name: "ACTIVE_EDITOR_TYPE_TEXT_EDITOR" },
  { no: 2, name: "ACTIVE_EDITOR_TYPE_TERMINAL" },
]);

/**
 * @generated from message exa.chat_web_server_pb.ChatMessageWithFeedback
 */
export class ChatMessageWithFeedback extends Message<ChatMessageWithFeedback> {
  /**
   * @generated from field: exa.chat_pb.ChatMessage message = 1;
   */
  message?: ChatMessage;

  /**
   * Store the feedback from the user about the chat message (e.g. "Like" or "Dislike")
   *
   * @generated from field: exa.chat_pb.ChatFeedbackType feedback = 2;
   */
  feedback = ChatFeedbackType.FEEDBACK_TYPE_UNSPECIFIED;

  /**
   * Stream ID so that the user can cancel the message.
   *
   * @generated from field: string stream_id = 3;
   */
  streamId = "";

  constructor(data?: PartialMessage<ChatMessageWithFeedback>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.ChatMessageWithFeedback";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message", kind: "message", T: ChatMessage },
    { no: 2, name: "feedback", kind: "enum", T: proto3.getEnumType(ChatFeedbackType) },
    { no: 3, name: "stream_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatMessageWithFeedback {
    return new ChatMessageWithFeedback().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatMessageWithFeedback {
    return new ChatMessageWithFeedback().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatMessageWithFeedback {
    return new ChatMessageWithFeedback().fromJsonString(jsonString, options);
  }

  static equals(a: ChatMessageWithFeedback | PlainMessage<ChatMessageWithFeedback> | undefined, b: ChatMessageWithFeedback | PlainMessage<ChatMessageWithFeedback> | undefined): boolean {
    return proto3.util.equals(ChatMessageWithFeedback, a, b);
  }
}

/**
 * Internal state that will be shared between the client and the web server.
 *
 * @generated from message exa.chat_web_server_pb.ChatMessageState
 */
export class ChatMessageState extends Message<ChatMessageState> {
  /**
   * @generated from field: repeated exa.chat_web_server_pb.ChatMessageWithFeedback messages = 1;
   */
  messages: ChatMessageWithFeedback[] = [];

  /**
   * @generated from field: bool is_receiving_message = 2;
   */
  isReceivingMessage = false;

  /**
   * @generated from field: exa.codeium_common_pb.UserSettings user_settings = 3;
   */
  userSettings?: UserSettings;

  constructor(data?: PartialMessage<ChatMessageState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.ChatMessageState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "message", T: ChatMessageWithFeedback, repeated: true },
    { no: 2, name: "is_receiving_message", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "user_settings", kind: "message", T: UserSettings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatMessageState {
    return new ChatMessageState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatMessageState {
    return new ChatMessageState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatMessageState {
    return new ChatMessageState().fromJsonString(jsonString, options);
  }

  static equals(a: ChatMessageState | PlainMessage<ChatMessageState> | undefined, b: ChatMessageState | PlainMessage<ChatMessageState> | undefined): boolean {
    return proto3.util.equals(ChatMessageState, a, b);
  }
}

/**
 * @generated from message exa.chat_web_server_pb.ClearConversation
 */
export class ClearConversation extends Message<ClearConversation> {
  /**
   * Clears an single conversation. If empty, clears the entire history across all conversations.
   *
   * @generated from field: string conversation_id = 1;
   */
  conversationId = "";

  constructor(data?: PartialMessage<ClearConversation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.ClearConversation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "conversation_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearConversation {
    return new ClearConversation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearConversation {
    return new ClearConversation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearConversation {
    return new ClearConversation().fromJsonString(jsonString, options);
  }

  static equals(a: ClearConversation | PlainMessage<ClearConversation> | undefined, b: ClearConversation | PlainMessage<ClearConversation> | undefined): boolean {
    return proto3.util.equals(ClearConversation, a, b);
  }
}

/**
 * @generated from message exa.chat_web_server_pb.OpenFilePointer
 */
export class OpenFilePointer extends Message<OpenFilePointer> {
  /**
   * @generated from field: string file_path = 1;
   */
  filePath = "";

  /**
   * @generated from field: int32 start_line = 2;
   */
  startLine = 0;

  /**
   * @generated from field: int32 start_col = 3;
   */
  startCol = 0;

  /**
   * @generated from field: int32 end_line = 4;
   */
  endLine = 0;

  /**
   * @generated from field: int32 end_col = 5;
   */
  endCol = 0;

  constructor(data?: PartialMessage<OpenFilePointer>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.OpenFilePointer";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "file_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start_line", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "start_col", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "end_line", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "end_col", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OpenFilePointer {
    return new OpenFilePointer().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OpenFilePointer {
    return new OpenFilePointer().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OpenFilePointer {
    return new OpenFilePointer().fromJsonString(jsonString, options);
  }

  static equals(a: OpenFilePointer | PlainMessage<OpenFilePointer> | undefined, b: OpenFilePointer | PlainMessage<OpenFilePointer> | undefined): boolean {
    return proto3.util.equals(OpenFilePointer, a, b);
  }
}

/**
 * @generated from message exa.chat_web_server_pb.InsertCodeAtCursor
 */
export class InsertCodeAtCursor extends Message<InsertCodeAtCursor> {
  /**
   * @generated from field: string text = 1;
   */
  text = "";

  /**
   * @generated from field: exa.chat_web_server_pb.ActiveEditorType editor_type = 2;
   */
  editorType = ActiveEditorType.UNSPECIFIED;

  constructor(data?: PartialMessage<InsertCodeAtCursor>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.InsertCodeAtCursor";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "editor_type", kind: "enum", T: proto3.getEnumType(ActiveEditorType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InsertCodeAtCursor {
    return new InsertCodeAtCursor().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InsertCodeAtCursor {
    return new InsertCodeAtCursor().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InsertCodeAtCursor {
    return new InsertCodeAtCursor().fromJsonString(jsonString, options);
  }

  static equals(a: InsertCodeAtCursor | PlainMessage<InsertCodeAtCursor> | undefined, b: InsertCodeAtCursor | PlainMessage<InsertCodeAtCursor> | undefined): boolean {
    return proto3.util.equals(InsertCodeAtCursor, a, b);
  }
}

/**
 * @generated from message exa.chat_web_server_pb.ApplyDiff
 */
export class ApplyDiff extends Message<ApplyDiff> {
  /**
   * @generated from field: string message_id = 1;
   */
  messageId = "";

  /**
   * @generated from field: string file_path = 2;
   */
  filePath = "";

  /**
   * @generated from field: exa.diff_action_pb.DiffBlock diff = 3;
   */
  diff?: DiffBlock;

  constructor(data?: PartialMessage<ApplyDiff>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.ApplyDiff";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "file_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "diff", kind: "message", T: DiffBlock },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ApplyDiff {
    return new ApplyDiff().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ApplyDiff {
    return new ApplyDiff().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ApplyDiff {
    return new ApplyDiff().fromJsonString(jsonString, options);
  }

  static equals(a: ApplyDiff | PlainMessage<ApplyDiff> | undefined, b: ApplyDiff | PlainMessage<ApplyDiff> | undefined): boolean {
    return proto3.util.equals(ApplyDiff, a, b);
  }
}

/**
 * @generated from message exa.chat_web_server_pb.HandshakeRequest
 */
export class HandshakeRequest extends Message<HandshakeRequest> {
  /**
   * @generated from field: exa.codeium_common_pb.Metadata metadata = 1;
   */
  metadata?: Metadata;

  /**
   * Optional UserId to identify clients in multi-user server.
   *
   * @generated from field: string user_id = 9;
   */
  userId = "";

  constructor(data?: PartialMessage<HandshakeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.HandshakeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 9, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HandshakeRequest {
    return new HandshakeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HandshakeRequest {
    return new HandshakeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HandshakeRequest {
    return new HandshakeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: HandshakeRequest | PlainMessage<HandshakeRequest> | undefined, b: HandshakeRequest | PlainMessage<HandshakeRequest> | undefined): boolean {
    return proto3.util.equals(HandshakeRequest, a, b);
  }
}

/**
 * @generated from message exa.chat_web_server_pb.ErrorResponse
 */
export class ErrorResponse extends Message<ErrorResponse> {
  /**
   * @generated from field: string error = 1;
   */
  error = "";

  constructor(data?: PartialMessage<ErrorResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.ErrorResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ErrorResponse {
    return new ErrorResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ErrorResponse {
    return new ErrorResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ErrorResponse {
    return new ErrorResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ErrorResponse | PlainMessage<ErrorResponse> | undefined, b: ErrorResponse | PlainMessage<ErrorResponse> | undefined): boolean {
    return proto3.util.equals(ErrorResponse, a, b);
  }
}

/**
 * Hydrate the initial state of the client.
 *
 * @generated from message exa.chat_web_server_pb.HandshakeResponse
 */
export class HandshakeResponse extends Message<HandshakeResponse> {
  /**
   * @generated from field: exa.codeium_common_pb.UserStatus user_status = 1;
   */
  userStatus?: UserStatus;

  /**
   * @generated from field: exa.chat_web_server_pb.ChatMessageState initial_state = 2;
   */
  initialState?: ChatMessageState;

  /**
   * @generated from field: string language_server_address = 3;
   */
  languageServerAddress = "";

  constructor(data?: PartialMessage<HandshakeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.HandshakeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_status", kind: "message", T: UserStatus },
    { no: 2, name: "initial_state", kind: "message", T: ChatMessageState },
    { no: 3, name: "language_server_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HandshakeResponse {
    return new HandshakeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HandshakeResponse {
    return new HandshakeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HandshakeResponse {
    return new HandshakeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: HandshakeResponse | PlainMessage<HandshakeResponse> | undefined, b: HandshakeResponse | PlainMessage<HandshakeResponse> | undefined): boolean {
    return proto3.util.equals(HandshakeResponse, a, b);
  }
}

/**
 * Update the state of the client.
 *
 * @generated from message exa.chat_web_server_pb.StateUpdate
 */
export class StateUpdate extends Message<StateUpdate> {
  /**
   * The array of messages can be a partial history based on `is_partial_update`. If a partial
   * update, the messages that are included will be updated.
   *
   * @generated from field: exa.chat_web_server_pb.ChatMessageState state = 1;
   */
  state?: ChatMessageState;

  /**
   * Whether the state is a partial update (ie. update only part of the history) or a full update (ie. replace entire history).
   *
   * @generated from field: bool is_partial_update = 2;
   */
  isPartialUpdate = false;

  constructor(data?: PartialMessage<StateUpdate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.StateUpdate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "state", kind: "message", T: ChatMessageState },
    { no: 2, name: "is_partial_update", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StateUpdate {
    return new StateUpdate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StateUpdate {
    return new StateUpdate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StateUpdate {
    return new StateUpdate().fromJsonString(jsonString, options);
  }

  static equals(a: StateUpdate | PlainMessage<StateUpdate> | undefined, b: StateUpdate | PlainMessage<StateUpdate> | undefined): boolean {
    return proto3.util.equals(StateUpdate, a, b);
  }
}

/**
 * Cancel the inflight message.
 *
 * @generated from message exa.chat_web_server_pb.CancelInfightMessage
 */
export class CancelInfightMessage extends Message<CancelInfightMessage> {
  /**
   * @generated from field: string stream_id = 1;
   */
  streamId = "";

  constructor(data?: PartialMessage<CancelInfightMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.CancelInfightMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stream_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CancelInfightMessage {
    return new CancelInfightMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CancelInfightMessage {
    return new CancelInfightMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CancelInfightMessage {
    return new CancelInfightMessage().fromJsonString(jsonString, options);
  }

  static equals(a: CancelInfightMessage | PlainMessage<CancelInfightMessage> | undefined, b: CancelInfightMessage | PlainMessage<CancelInfightMessage> | undefined): boolean {
    return proto3.util.equals(CancelInfightMessage, a, b);
  }
}

/**
 * Heartbeat to keep the connection alive.
 *
 * @generated from message exa.chat_web_server_pb.Heartbeat
 */
export class Heartbeat extends Message<Heartbeat> {
  constructor(data?: PartialMessage<Heartbeat>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.Heartbeat";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Heartbeat {
    return new Heartbeat().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Heartbeat {
    return new Heartbeat().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Heartbeat {
    return new Heartbeat().fromJsonString(jsonString, options);
  }

  static equals(a: Heartbeat | PlainMessage<Heartbeat> | undefined, b: Heartbeat | PlainMessage<Heartbeat> | undefined): boolean {
    return proto3.util.equals(Heartbeat, a, b);
  }
}

/**
 * Update user settings.
 *
 * @generated from message exa.chat_web_server_pb.UpdateUserSettingsRequest
 */
export class UpdateUserSettingsRequest extends Message<UpdateUserSettingsRequest> {
  /**
   * @generated from field: exa.codeium_common_pb.UserSettings user_settings = 1;
   */
  userSettings?: UserSettings;

  constructor(data?: PartialMessage<UpdateUserSettingsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.UpdateUserSettingsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_settings", kind: "message", T: UserSettings },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserSettingsRequest {
    return new UpdateUserSettingsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserSettingsRequest {
    return new UpdateUserSettingsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserSettingsRequest {
    return new UpdateUserSettingsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateUserSettingsRequest | PlainMessage<UpdateUserSettingsRequest> | undefined, b: UpdateUserSettingsRequest | PlainMessage<UpdateUserSettingsRequest> | undefined): boolean {
    return proto3.util.equals(UpdateUserSettingsRequest, a, b);
  }
}

/**
 * Messages from the Chat Client or IDE to the Web Server.
 *
 * @generated from message exa.chat_web_server_pb.WebServerRequest
 */
export class WebServerRequest extends Message<WebServerRequest> {
  /**
   * @generated from oneof exa.chat_web_server_pb.WebServerRequest.payload
   */
  payload: {
    /**
     * Request an initial handshake from the chat server.
     *
     * @generated from field: exa.chat_web_server_pb.HandshakeRequest handshake_request = 1;
     */
    value: HandshakeRequest;
    case: "handshakeRequest";
  } | {
    /**
     * Send a message to the chat server to get a chat response from the assistant.
     *
     * @generated from field: exa.language_server_pb.GetChatMessageRequest get_chat_message_request = 2;
     */
    value: GetChatMessageRequest;
    case: "getChatMessageRequest";
  } | {
    /**
     * Record feedback from the user about the chat message.
     *
     * @generated from field: exa.language_server_pb.RecordChatFeedbackRequest record_chat_feedback_request = 3;
     */
    value: RecordChatFeedbackRequest;
    case: "recordChatFeedbackRequest";
  } | {
    /**
     * Clear the conversation history.
     *
     * @generated from field: exa.chat_web_server_pb.ClearConversation clear_conversation = 4;
     */
    value: ClearConversation;
    case: "clearConversation";
  } | {
    /**
     * Focus on a specific file and code block in the IDE.
     *
     * @generated from field: exa.chat_web_server_pb.OpenFilePointer open_file_pointer = 5;
     */
    value: OpenFilePointer;
    case: "openFilePointer";
  } | {
    /**
     * Cancel inflight message.
     *
     * @generated from field: exa.chat_web_server_pb.CancelInfightMessage cancel_infight_message = 6;
     */
    value: CancelInfightMessage;
    case: "cancelInfightMessage";
  } | {
    /**
     * Insert text at the cursor position.
     *
     * @generated from field: exa.chat_web_server_pb.InsertCodeAtCursor insert_at_cursor = 7;
     */
    value: InsertCodeAtCursor;
    case: "insertAtCursor";
  } | {
    /**
     * Apply a diff.
     *
     * @generated from field: exa.chat_web_server_pb.ApplyDiff apply_diff = 8;
     */
    value: ApplyDiff;
    case: "applyDiff";
  } | {
    /**
     * Heartbeat to keep the connection alive.
     *
     * @generated from field: exa.chat_web_server_pb.Heartbeat heartbeat = 9;
     */
    value: Heartbeat;
    case: "heartbeat";
  } | {
    /**
     * Update user settings.
     *
     * @generated from field: exa.chat_web_server_pb.UpdateUserSettingsRequest update_user_settings = 10;
     */
    value: UpdateUserSettingsRequest;
    case: "updateUserSettings";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<WebServerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.WebServerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "handshake_request", kind: "message", T: HandshakeRequest, oneof: "payload" },
    { no: 2, name: "get_chat_message_request", kind: "message", T: GetChatMessageRequest, oneof: "payload" },
    { no: 3, name: "record_chat_feedback_request", kind: "message", T: RecordChatFeedbackRequest, oneof: "payload" },
    { no: 4, name: "clear_conversation", kind: "message", T: ClearConversation, oneof: "payload" },
    { no: 5, name: "open_file_pointer", kind: "message", T: OpenFilePointer, oneof: "payload" },
    { no: 6, name: "cancel_infight_message", kind: "message", T: CancelInfightMessage, oneof: "payload" },
    { no: 7, name: "insert_at_cursor", kind: "message", T: InsertCodeAtCursor, oneof: "payload" },
    { no: 8, name: "apply_diff", kind: "message", T: ApplyDiff, oneof: "payload" },
    { no: 9, name: "heartbeat", kind: "message", T: Heartbeat, oneof: "payload" },
    { no: 10, name: "update_user_settings", kind: "message", T: UpdateUserSettingsRequest, oneof: "payload" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebServerRequest {
    return new WebServerRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebServerRequest {
    return new WebServerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebServerRequest {
    return new WebServerRequest().fromJsonString(jsonString, options);
  }

  static equals(a: WebServerRequest | PlainMessage<WebServerRequest> | undefined, b: WebServerRequest | PlainMessage<WebServerRequest> | undefined): boolean {
    return proto3.util.equals(WebServerRequest, a, b);
  }
}

/**
 * Messages from the Web Server to the Chat Client or IDE.
 *
 * @generated from message exa.chat_web_server_pb.WebServerResponse
 */
export class WebServerResponse extends Message<WebServerResponse> {
  /**
   * @generated from oneof exa.chat_web_server_pb.WebServerResponse.payload
   */
  payload: {
    /**
     * @generated from field: exa.chat_web_server_pb.HandshakeResponse handshake_response = 1;
     */
    value: HandshakeResponse;
    case: "handshakeResponse";
  } | {
    /**
     * @generated from field: exa.chat_web_server_pb.StateUpdate state_update = 2;
     */
    value: StateUpdate;
    case: "stateUpdate";
  } | {
    /**
     * @generated from field: exa.chat_web_server_pb.OpenFilePointer open_file_pointer = 3;
     */
    value: OpenFilePointer;
    case: "openFilePointer";
  } | {
    /**
     * @generated from field: exa.chat_web_server_pb.InsertCodeAtCursor insert_at_cursor = 4;
     */
    value: InsertCodeAtCursor;
    case: "insertAtCursor";
  } | {
    /**
     * @generated from field: exa.chat_web_server_pb.ApplyDiff apply_diff = 5;
     */
    value: ApplyDiff;
    case: "applyDiff";
  } | {
    /**
     * @generated from field: exa.chat_web_server_pb.ErrorResponse error_response = 6;
     */
    value: ErrorResponse;
    case: "errorResponse";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<WebServerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.WebServerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "handshake_response", kind: "message", T: HandshakeResponse, oneof: "payload" },
    { no: 2, name: "state_update", kind: "message", T: StateUpdate, oneof: "payload" },
    { no: 3, name: "open_file_pointer", kind: "message", T: OpenFilePointer, oneof: "payload" },
    { no: 4, name: "insert_at_cursor", kind: "message", T: InsertCodeAtCursor, oneof: "payload" },
    { no: 5, name: "apply_diff", kind: "message", T: ApplyDiff, oneof: "payload" },
    { no: 6, name: "error_response", kind: "message", T: ErrorResponse, oneof: "payload" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebServerResponse {
    return new WebServerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebServerResponse {
    return new WebServerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebServerResponse {
    return new WebServerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: WebServerResponse | PlainMessage<WebServerResponse> | undefined, b: WebServerResponse | PlainMessage<WebServerResponse> | undefined): boolean {
    return proto3.util.equals(WebServerResponse, a, b);
  }
}

/**
 * @generated from message exa.chat_web_server_pb.GetMatchingIndexedReposRequest
 */
export class GetMatchingIndexedReposRequest extends Message<GetMatchingIndexedReposRequest> {
  /**
   * @generated from field: exa.codeium_common_pb.Metadata metadata = 1;
   */
  metadata?: Metadata;

  /**
   * @generated from field: string query = 2;
   */
  query = "";

  /**
   * @generated from field: int32 max_items = 3;
   */
  maxItems = 0;

  constructor(data?: PartialMessage<GetMatchingIndexedReposRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.GetMatchingIndexedReposRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: Metadata },
    { no: 2, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "max_items", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMatchingIndexedReposRequest {
    return new GetMatchingIndexedReposRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMatchingIndexedReposRequest {
    return new GetMatchingIndexedReposRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMatchingIndexedReposRequest {
    return new GetMatchingIndexedReposRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMatchingIndexedReposRequest | PlainMessage<GetMatchingIndexedReposRequest> | undefined, b: GetMatchingIndexedReposRequest | PlainMessage<GetMatchingIndexedReposRequest> | undefined): boolean {
    return proto3.util.equals(GetMatchingIndexedReposRequest, a, b);
  }
}

/**
 * @generated from message exa.chat_web_server_pb.GetMatchingIndexedReposResponse
 */
export class GetMatchingIndexedReposResponse extends Message<GetMatchingIndexedReposResponse> {
  /**
   * @generated from field: repeated exa.codeium_common_pb.GitRepoInfo matched_repositories = 1;
   */
  matchedRepositories: GitRepoInfo[] = [];

  constructor(data?: PartialMessage<GetMatchingIndexedReposResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.GetMatchingIndexedReposResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "matched_repositories", kind: "message", T: GitRepoInfo, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMatchingIndexedReposResponse {
    return new GetMatchingIndexedReposResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMatchingIndexedReposResponse {
    return new GetMatchingIndexedReposResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMatchingIndexedReposResponse {
    return new GetMatchingIndexedReposResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetMatchingIndexedReposResponse | PlainMessage<GetMatchingIndexedReposResponse> | undefined, b: GetMatchingIndexedReposResponse | PlainMessage<GetMatchingIndexedReposResponse> | undefined): boolean {
    return proto3.util.equals(GetMatchingIndexedReposResponse, a, b);
  }
}

/**
 * @generated from message exa.chat_web_server_pb.GetMatchingCodeContextRequest
 */
export class GetMatchingCodeContextRequest extends Message<GetMatchingCodeContextRequest> {
  /**
   * @generated from field: string query = 1;
   */
  query = "";

  /**
   * Filters on the type of code context items to search over.
   *
   * @generated from field: repeated exa.codeium_common_pb.CodeContextType allowed_types = 3;
   */
  allowedTypes: CodeContextType[] = [];

  /**
   * @generated from field: int32 max_items = 4;
   */
  maxItems = 0;

  constructor(data?: PartialMessage<GetMatchingCodeContextRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.GetMatchingCodeContextRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "allowed_types", kind: "enum", T: proto3.getEnumType(CodeContextType), repeated: true },
    { no: 4, name: "max_items", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMatchingCodeContextRequest {
    return new GetMatchingCodeContextRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMatchingCodeContextRequest {
    return new GetMatchingCodeContextRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMatchingCodeContextRequest {
    return new GetMatchingCodeContextRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMatchingCodeContextRequest | PlainMessage<GetMatchingCodeContextRequest> | undefined, b: GetMatchingCodeContextRequest | PlainMessage<GetMatchingCodeContextRequest> | undefined): boolean {
    return proto3.util.equals(GetMatchingCodeContextRequest, a, b);
  }
}

/**
 * @generated from message exa.chat_web_server_pb.GetMatchingCodeContextResponse
 */
export class GetMatchingCodeContextResponse extends Message<GetMatchingCodeContextResponse> {
  /**
   * @generated from field: repeated exa.codeium_common_pb.CodeContextItem matched_items = 1;
   */
  matchedItems: CodeContextItem[] = [];

  constructor(data?: PartialMessage<GetMatchingCodeContextResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "exa.chat_web_server_pb.GetMatchingCodeContextResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "matched_items", kind: "message", T: CodeContextItem, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMatchingCodeContextResponse {
    return new GetMatchingCodeContextResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMatchingCodeContextResponse {
    return new GetMatchingCodeContextResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMatchingCodeContextResponse {
    return new GetMatchingCodeContextResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetMatchingCodeContextResponse | PlainMessage<GetMatchingCodeContextResponse> | undefined, b: GetMatchingCodeContextResponse | PlainMessage<GetMatchingCodeContextResponse> | undefined): boolean {
    return proto3.util.equals(GetMatchingCodeContextResponse, a, b);
  }
}


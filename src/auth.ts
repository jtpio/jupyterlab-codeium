import { createPromiseClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-web';
import { SeatManagementService } from './api/proto/exa/seat_management_pb/seat_management_connect';

export async function registerUser(
  token: string,
  proxyUrl: string
): Promise<{ api_key: string; name: string }> {
  const client = createPromiseClient(
    SeatManagementService,
    createConnectTransport({
      baseUrl: proxyUrl,
      useBinaryFormat: true,
      defaultTimeoutMs: 5000
    })
  );
  const response = await client.registerUser({
    firebaseIdToken: token
  });
  return {
    api_key: response.apiKey,
    name: response.name
  };
}

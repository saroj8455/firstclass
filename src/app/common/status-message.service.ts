import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatusMessageService {
  constructor() {}

  getStatusMessage(statusCode: number): string {
    switch (statusCode) {
      case 200:
        return 'Success: The request was successful.';
      case 201:
        return 'Created: The resource was successfully created.';
      case 204:
        return 'No Content: The request was successful but there is no content to send.';
      case 400:
        return 'Bad Request: The server could not understand the request due to invalid syntax.';
      case 401:
        return 'Unauthorized: The client must authenticate itself to get the requested response.';
      case 403:
        return 'Forbidden: The client does not have access rights to the content.';
      case 404:
        return 'Not Found: The server can not find the requested resource.';
      case 500:
        return `Internal Server Error: The server has encountered a situation it doesn't know how to handle.`;
      case 502:
        return 'Bad Gateway: The server, while acting as a gateway, got an invalid response.';
      case 503:
        return 'Service Unavailable: The server is not ready to handle the request.';
      default:
        return 'Unknown Status: An unknown error occurred.';
    }
  }
}

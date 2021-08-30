import type {InstanceOptions, IOContext, IOResponse} from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class Status extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('api AWS referente aos itens', context, options)
  }

  public async getStatus(status: number): Promise<string> {
    return this.http.get(status.toString(), {
      metric: 'status-get',
    })
  }

  public async getStatusWithHeaders(status: number): Promise<IOResponse<string>> {
    return this.http.getRaw(status.toString(), {
      metric: 'status-get-raw',
    })
  }
}

import { IOClients } from "@vtex/api";
import { OMS } from '@vtex/clients'
import Status from './status'

export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get oms() {
    return this.getOrSet('oms', OMS)
  }
}

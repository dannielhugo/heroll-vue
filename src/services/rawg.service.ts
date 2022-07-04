import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { Config } from '@/config/config';

const instance = axios.create({
  baseURL: Config.rawg.rawg_url,
});

export class RawgService {
  static get(path: string, config?: AxiosRequestConfig<never>) {
    const params = {
      ...config?.params,
      key: Config.rawg.key,
    };

    const newCfg = {
      ...config,
      params,
    };

    return instance.get(path, newCfg);
  }
}

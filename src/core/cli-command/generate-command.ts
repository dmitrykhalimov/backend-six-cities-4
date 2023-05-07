import got from 'got';
import OfferGenerator from '../../modules/offer-generator/offer-generator.js';
import { MockData } from '../../types/mock-data.type.js';
import { CliCommandInterface } from './cli-command.interface.js';
import { appendFile } from 'node:fs/promises';

export default class GenerateCommand implements CliCommandInterface {
  public readonly name = '--generate';
  private initialData!: MockData;

  public async execute(...parameters:string[]): Promise<void> {
    console.dir(parameters);
    const [count, filepath, url] = parameters;
    const offerCount = Number.parseInt(count, 10);

    try {
      this.initialData = await got.get(url).json();
    } catch {
      console.log(`Can't fetch data from ${url}.`);
    }

    const offerGeneratorString = new OfferGenerator(this.initialData);

    for (let i = 0; i < offerCount; i++) {
      await appendFile(filepath, `${offerGeneratorString.generate()}\n`, 'utf8');
    }
  }
}

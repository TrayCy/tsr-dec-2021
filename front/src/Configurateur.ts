import { Config } from "./interfaces/Config";

export class Configurateur {
  callback: (conf: Config) => void = () => {};

  config: Config = {
    sampleNbr: 10,
    multiplicator: 2,
  };

  constructor() {
    console.log("My configurator");
    const sampleNbrInput = document.querySelector("input.sampleNbr");
    if (!(sampleNbrInput instanceof HTMLInputElement)) {
      throw new Error("Ooops");
    }

    console.log(sampleNbrInput);
    sampleNbrInput.value = this.config.sampleNbr + "";
    const sampleNbrLabel = document.querySelector("div.sampleNbr");
    sampleNbrLabel.innerHTML = this.config.sampleNbr + "";

    sampleNbrInput.addEventListener("input", (evt: Event) => {
      console.log(evt);

      this.config.sampleNbr = +(evt.target as HTMLInputElement).value;

      const sampleNbrLabel = document.querySelector("div.sampleNbr");
      sampleNbrLabel.innerHTML = this.config.sampleNbr + "";

      this.callback(this.config);
    });
  }

  public onChange(callback: (conf: Config) => void) {
    this.callback = callback;
  }
}

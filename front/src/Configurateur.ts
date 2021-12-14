import { Config } from "./interfaces/Config";

export class Configurateur {
  callback: (conf: Config) => void = () => {};

  config: Config = {
    sampleNbr: 10,
    multiplicator: 2,
  };

  constructor() {
    console.log("My configurator");
    this.init("sampleNbr");
    this.init("multiplicator");
  }

  init(className: keyof Config) {
    const input = document.querySelector("input." + className);
    if (!(input instanceof HTMLInputElement)) {
      throw new Error("Ooops");
    }

    console.log(input);
    input.value = this.config[className] + "";
    const label = document.querySelector("div." + className);
    label.innerHTML = this.config[className] + "";

    input.addEventListener("input", (evt: Event) => {
      console.log(evt);

      this.config[className] = +(evt.target as HTMLInputElement).value;

      const label = document.querySelector("div." + className);
      label.innerHTML = this.config[className] + "";

      this.callback(this.config);
    });
  }

  public onChange(callback: (conf: Config) => void) {
    this.callback = callback;
  }
}

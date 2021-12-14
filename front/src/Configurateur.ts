import { Config } from "./interfaces/Config";

export class Configurateur {
  // #region Constructors (1)

  constructor() {
    console.log("My configurator");
  }

  // #endregion Constructors (1)

  // #region Public Methods (1)

  public onChange(callback: (conf: Config) => void) {
    throw new Error("Method not implemented.");
  }

  // #endregion Public Methods (1)
}

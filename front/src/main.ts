import { Configurateur } from "./Configurateur";
import { Config } from "./interfaces/Config";
import { Multiplication } from "./Multiplication";
import "./style.scss";

function main() {
  //main function
  console.log("Start front");
  const m = new Multiplication();
  m.render();
  const c = new Configurateur();
  c.onChange((conf: Config) => {
    m.setSampleNb(conf.sampleNbr);
    m.setMultiplicator(conf.multiplicator);
    m.render();
  });
}

main();

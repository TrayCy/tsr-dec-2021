import { CleanPlugin } from "webpack";

export class Multiplication {
  // #region Properties (2)

  public multiplicator: number = 2;
  public sampleNbr: number = 10;

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor() {
    console.log("Instanciate new multiplication");
  }

  // #endregion Constructors (1)

  // #region Public Methods (5)

  public clean() {
    const gPoint = document.querySelector("svg g.point");
    gPoint.innerHTML = "";
    const gLine = document.querySelector("svg g.line");
    gLine.innerHTML = "";
  }

  public render() {
    console.log("I render");

    this.clean();

    const gPoint = document.querySelector("svg g.point");

    //my big circle
    const cx0 = 220;
    const cy0 = 220;
    const r0 = 200;

    const n = this.sampleNbr; // coeff

    for (let i = 0; i < n; i++) {
      // console.log("Block statement execution no." + i);

      const angle = ((2 * Math.PI) / n) * i;

      const cx = cx0 + r0 * Math.cos(angle);
      const cy = cy0 + r0 * Math.sin(angle);
      const r = 3;

      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", cx + "");
      circle.setAttribute("cy", cy + "");
      circle.setAttribute("r", r + "");

      gPoint.appendChild(circle);
    }

    this.renderLine();
  }

  public renderLine() {
    const gLine = document.querySelector("svg g.line");

    //my big circle
    const cx0 = 220;
    const cy0 = 220;
    const r0 = 200;

    const n = this.sampleNbr; // coeff
    const p = this.multiplicator;

    for (let i = 0; i < n; i++) {
      // console.log("Block statement execution no." + i);

      const angle1 = ((2 * Math.PI) / n) * i;
      const angle2 = p * angle1;

      const x1 = cx0 + r0 * Math.cos(angle1);
      const y1 = cy0 + r0 * Math.sin(angle1);
      const x2 = cx0 + r0 * Math.cos(angle2);
      const y2 = cy0 + r0 * Math.sin(angle2);

      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      circle.setAttribute("x1", x1 + "");
      circle.setAttribute("y1", y1 + "");
      circle.setAttribute("x2", x2 + "");
      circle.setAttribute("y2", y2 + "");

      gLine.appendChild(circle);
    }
  }

  public setMultiplicator(multiplicator: any) {
    this.multiplicator = multiplicator;
  }

  public setSampleNbr(sampleNbr: any) {
    this.sampleNbr = sampleNbr;
  }

  // #endregion Public Methods (5)
}

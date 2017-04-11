import * as React from 'react'
import { connect } from "react-redux";
import * as PIXI from 'pixi.js';

interface CanvasProps { }

@connect()
export default class Canvas extends React.Component<CanvasProps, any> {
  private canvas: HTMLDivElement;
  private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
  private stage: PIXI.Container;
  private bunny: PIXI.Sprite;

  constructor() {
    super();
  }

  getBoundingRectangle = () => {
    return this.canvas.parentElement.getBoundingClientRect();
  }

  resizeCanvas = () => {
    var rect = this.getBoundingRectangle();
    this.renderer.resize(rect.width, rect.height);
    this.positionBunny();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeCanvas);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeCanvas);

    var rect = this.getBoundingRectangle();

    this.renderer = PIXI.autoDetectRenderer(rect.width, rect.height, {
      transparent: false,
      resolution: 1
    });

    this.renderer.backgroundColor = 0x1099bb;
    this.canvas.appendChild(this.renderer.view);

    this.stage = new PIXI.Container();

    PIXI.loader
      .add("bunny", "assets/bunny.png")
      .load(this.setup);
  }

  setup = () => {
    this.bunny = new PIXI.Sprite(
      PIXI.loader.resources["bunny"].texture
    );
    this.positionBunny();
    this.stage.addChild(this.bunny);

    this.animationLoop();
  }

  positionBunny = () => {
    this.bunny.anchor.set(0.5);
    this.bunny.x = this.renderer.width / 2;
    this.bunny.y = this.renderer.height / 2;
  }

  animationLoop = () => {
    requestAnimationFrame(this.animationLoop);
    this.bunny.rotation += 0.1
    this.renderer.render(this.stage);
  }

  render() {
    return (
      <div className="canvas" ref={(canvas) => this.canvas = canvas} />
    );
  }
}
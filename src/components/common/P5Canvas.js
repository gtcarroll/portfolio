import { useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import p5 from "p5";
import { IconButton } from "../recipes/dependencies";
import {
  pallete,
  ThemeContext,
  styles,
  units,
  LayoutContext,
} from "../../context";

const t = {
  g1: 0,
  g2: 0,
  a: 0,
  b1: 0,
  b2: 0,
  e: 0,
};
const spring = {
  velocity: 0.1,
  displacement: 0.1,
  stiffness: 300,
  damping: 0.3,
  mass: 3,
};
const frames = {
  max: 240,
  letter: 120,
  offset: 20,
};
const width = {
  unit: 0,
  letter: 0,
};
let colors;
let frame = 0;
let reverse = false;

function springPercent(t) {
  const d = spring.damping * 3 * Math.sqrt(spring.stiffness * spring.mass);
  const alpha = -d / (2 * spring.mass);
  const b = Math.pow(d, 2) - 4 * spring.mass * spring.stiffness;
  const beta = Math.sqrt(-b) / (2 * spring.mass);
  const c1 = spring.displacement;
  const c2 = (spring.velocity - c1 * alpha) / beta;

  const y =
    c1 * Math.exp(alpha * t) * Math.cos(beta * t) +
    c2 * Math.exp(alpha * t) * Math.sin(beta * t);

  return 1 - y * 10;
}

export const P5Canvas = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  let isDark = theme.isDark ? "dark" : "light";

  function sketch(p) {
    // p is a reference to the p5 instance this sketch is attached to
    p.setup = function () {
      colors = {
        bg: p.color(pallete[isDark][0]),
        fg1: p.color(pallete["light"][1]),
        fg2: p.color(pallete["light"][2]),
      };
      updateWidth();

      p.noStroke();
      p.ellipseMode(p.CORNER);
      p.createCanvas(width.unit * 14, width.unit * 6);
    };

    p.draw = function () {
      if (frame < frames.max || frame >= 0) {
        // update timing values
        t.g1 = springPercent(frame / frames.letter);
        t.g2 = springPercent(
          Math.max(0, (frame - frames.offset / 2) / frames.letter)
        );
        t.a = springPercent(
          Math.max(0, (frame - frames.offset) / frames.letter)
        );
        t.b1 = springPercent(
          Math.max(0, (frame - 2 * frames.offset) / frames.letter)
        );
        t.b2 = springPercent(
          Math.max(0, (frame - (5 * frames.offset) / 2) / frames.letter)
        );
        t.e = springPercent(
          Math.max(0, (frame - 3 * frames.offset) / frames.letter)
        );
      }

      // draw letters
      p.background(colors.bg);
      let xOffset = (3 * width.letter) / 20;
      drawG(width.unit + xOffset, width.unit * 1.5, width.letter, t.g1, t.g2);
      drawB(
        width.unit * 7 + xOffset,
        width.unit * 1.5,
        width.letter,
        t.b1,
        t.b2
      );
      drawE(width.unit * 10 + xOffset, width.unit * 1.5, width.letter, t.e);
      drawA(width.unit * 4 + xOffset, width.unit * 1.5, width.letter, t.a);

      // update frame values
      if (reverse) frame--;
      else frame++;

      if (frame >= frames.max) reverse = !reverse;
      else if (frame === 0) reverse = !reverse;
    };

    p.windowResized = function () {
      updateWidth();
      p.resizeCanvas(width.unit * 14, width.unit * 6);
    };

    function updateWidth() {
      width.unit = 50;
      if (window.innerWidth < width.unit * 14) {
        width.unit = window.innerWidth / 14;
      }
      width.letter = width.unit * 3;
    }

    function drawG(x, y, w, p1, p2) {
      // draw circle
      let c = {
        x: x + ((3 * w) / 5) * (1 - p2),
        y: y + ((3 * w) / 5) * (1 - p2),
        w: w,
      };
      p.fill(colors.fg2);
      p.ellipse(c.x, c.y, c.w);

      // draw mask
      let mask = {
        x: x + (5 * w) / 3,
        y: y + (5 * w) / 3,
        w: (6 * w) / 3,
      };
      p.fill(colors.bg);
      p.triangle(
        mask.x,
        mask.y,
        mask.x - mask.w,
        mask.y,
        mask.x,
        mask.y - mask.w
      );

      // draw triangle
      let tri = {
        x: x + (9 * w) / 10 - (w / 2) * (1 - p1),
        y: y + w + (w / 2) * (1 - p1),
        w: (2 * w) / 5,
        fill: colors.fg1,
      };
      p.fill(tri.fill);
      p.triangle(
        tri.x,
        tri.y,
        tri.x,
        tri.y - tri.w,
        tri.x - tri.w,
        tri.y - tri.w
      );
    }

    function drawA(x, y, w, p1) {
      // draw triangle
      let tri = {
        x: x + w / 10,
        y: y + w + w * (1 - p1),
        h: w,
      };
      let yMax = tri.y;
      if (tri.y < y + w || frame - frames.offset >= frames.letter / 4) {
        yMax = y + w;
      }

      p.fill(colors.fg1);
      p.triangle(
        tri.x,
        yMax,
        tri.x + (4 * w) / 5,
        yMax,
        tri.x + (2 * w) / 5,
        tri.y - tri.h
      );

      // draw mask
      p.fill(colors.bg);
      p.rect(x, y + w, w, tri.h);
    }

    function drawB(x, y, w, p1, p2) {
      // draw top circle
      let c1 = {
        x: x - (w / 3) * (1 - p1),
        y: y,
        w: w / 2,
      };
      p.fill(colors.fg1);
      p.ellipse(c1.x, c1.y, c1.w);

      // draw bottom circle
      let c2 = {
        x: x - (w / 2) * (1 - p2),
        y: y + w / 3,
        w: (2 * w) / 3,
      };
      p.fill(colors.fg2);
      p.ellipse(c2.x, c2.y, c2.w);

      // draw mask
      p.fill(colors.bg);
      p.rect(x - w / 2, y, (2 * w) / 3, w);
    }

    function drawE(x, y, w, p1) {
      // draw rect
      let r = {
        x: x + (3 * w) / 5,
        y: y,
        w: ((3 * w) / 5) * p1,
        h: w,
      };
      p.fill(colors.fg1);
      p.rect(r.x - r.w, r.y, r.w, r.h);
    }
  }

  // create a reference to the container in which the p5 instance should place the canvas
  const p5ContainerRef = useRef();

  useEffect(() => {
    // On component creation, instantiate a p5 object with the sketch and container reference
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    // On component destruction, delete the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, [isDark]);

  return (
    <HeaderContainer
      style={{
        height: `calc(2.5 * ${layout.height.hero})`,
        marginBottom: `calc(0.5 * ${layout.height.hero})`,
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
    >
      <Header
        style={{
          fontSize: layout.fontSize.h1,
          color: pallete["light"][1],
          maxWidth: layout.width.ingredients,
        }}
      >
        <span>p</span>
        <span>r</span>
        <span>o</span>
        <span>j</span>
        <span>e</span>
        <span>c</span>
        <span>t</span>
        <span>s</span>
        <span> </span>
        <span>b</span>
        <span>y</span>
      </Header>
      <P5Container ref={p5ContainerRef} />

      <Header2
        style={{
          fontSize: layout.fontSize.h2,
          color: pallete["light"][2],
          maxWidth: `calc(${layout.width.ingredients} / 2)`,
        }}
      >
        <span>j</span>
        <span>u</span>
        <span>m</span>
        <span>p</span>
        <span> </span>
        <span>t</span>
        <span>o</span>
      </Header2>
      <RowDiv
        style={{
          fontSize: layout.fontSize.h3,
          color: pallete["light"][1],
          maxWidth: layout.width.ingredients,
        }}
      >
        <IconButton
          title={"recipes"}
          label={"recipes"}
          color={pallete["light"][1]}
          textColor={pallete["light"][1]}
          isToggle
          isCentered
          isActive={false}
          onClick={() => {
            document
              .getElementById("recipes")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
        <div
          style={{
            color: pallete["light"][2],
          }}
        >
          -
        </div>
        <IconButton
          title={"sudokoo"}
          label={"sudokoo"}
          color={pallete["light"][1]}
          textColor={pallete["light"][1]}
          isToggle
          isCentered
          isActive={false}
          onClick={() => {
            document
              .getElementById("sudokoo")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
        <div
          style={{
            color: pallete["light"][2],
          }}
        >
          -
        </div>
        <IconButton
          title={"uzumaki"}
          label={"uzumaki"}
          color={pallete["light"][1]}
          textColor={pallete["light"][1]}
          isToggle
          isCentered
          isActive={false}
          onClick={() => {
            document
              .getElementById("uzumaki")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
      </RowDiv>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  // animation
  transition: ${styles.transition.body};

  // flexbox
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  // box model
  width: 100%;
`;

const RowDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  justify-content: center;

  // box model
  margin: 0 auto;
  padding: 0 ${units.rem2};
  padding-top: ${units.rem5};
  width: calc(100vw - 2 * ${units.rem2});
`;

const Header = styled.h1`
  // flexbox
  display: flex;
  justify-content: space-around;

  // box model
  margin: 0 auto;
  padding: 0 ${units.rem2};
  width: calc(100vw - 2 * ${units.rem2});

  // typography
  white-space: pre;
`;

const Header2 = styled.h2`
  // flexbox
  display: flex;
  justify-content: space-around;

  // box model
  margin: 0 auto;
  padding: 0 ${units.rem1};
  width: 100%;

  // typography
  white-space: pre;
`;

const P5Container = styled.div`
  // box model
  margin: 0 auto;
`;

import { Anchor } from './Anchor';

export default { title: 'Anchor' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Anchor href="https://raikou.dev" target="blank" underline="never">
        Raikou website link: never
      </Anchor>
      <br />
      <Anchor href="https://raikou.dev" target="blank">
        Raikou website link: hover
      </Anchor>
      <br />
      <Anchor href="https://raikou.dev" target="blank" underline="always">
        Raikou website link: always
      </Anchor>
      <br />
      <Anchor
        href="https://raikou.dev"
        target="blank"
        underline="never"
        variant="gradient"
        fz={60}
        fw="bold"
      >
        Raikou website link: never
      </Anchor>
    </div>
  );
}

export function Unstyled() {
  return (
    <Anchor href="#" unstyled>
      Unstyled
    </Anchor>
  );
}

export function LineClamp() {
  return (
    <Anchor href="#" lineClamp={1}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam non ipsum aliquid
      voluptatibus. Repellat, illo cumque a inventore excepturi dolorem? Asperiores quasi numquam
      natus ipsum rerum architecto cumque quo ut.
    </Anchor>
  );
}

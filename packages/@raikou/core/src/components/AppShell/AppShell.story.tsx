import * as TablerIcons from '@tabler/icons-react';
import { useDisclosure } from '@raikou/hooks';
import { ActionIcon } from '../ActionIcon';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { Group } from '../Group';
import { ScrollArea } from '../ScrollArea';
import { Stack } from '../Stack';
import { AppShell } from './AppShell';

export default { title: 'AppShell' };

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget nunc';

const longContent = Array(30).fill(lorem).join('\n\n');

export function Usage() {
  const [navbarOpened, { toggle: toggleNavbar }] = useDisclosure(true);
  const [navbarMobileOpened, { toggle: toggleNavbarMobile }] = useDisclosure(false);
  const [asideOpened, { toggle: toggleAside }] = useDisclosure(true);
  const [asideMobileOpened, { toggle: toggleAsideMobile }] = useDisclosure(false);
  const [headerOpened, { toggle: toggleHeader }] = useDisclosure(true);
  const [footerOpened, { toggle: toggleFooter }] = useDisclosure(true);

  return (
    <AppShell
      padding="md"
      navbar={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: !navbarOpened, mobile: !navbarMobileOpened },
      }}
      aside={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: !asideOpened, mobile: !asideMobileOpened },
      }}
      header={{
        height: 60,
        collapsed: !headerOpened,
      }}
      footer={{
        height: 50,
        collapsed: !footerOpened,
      }}
    >
      <AppShell.Navbar>
        <AppShell.Section>First section</AppShell.Section>
        <AppShell.Section>Second section</AppShell.Section>
        <AppShell.Section grow>Grow section</AppShell.Section>
        <AppShell.Section>Last section</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <Group>
          <Button onClick={toggleHeader}>Toggle header</Button>
          <Button onClick={toggleFooter}>Toggle footer</Button>
          <Button onClick={toggleNavbar}>Toggle navbar</Button>
          <Button onClick={toggleNavbarMobile}>Toggle navbar mobile</Button>

          <Button onClick={toggleAside}>Toggle aside</Button>
          <Button onClick={toggleAsideMobile}>Toggle aside mobile</Button>
        </Group>
        <p>{longContent}</p>
      </AppShell.Main>

      <AppShell.Aside>Aside</AppShell.Aside>

      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <ActionIcon
      variant="transparent"
      color="black"
      size="xl"
      styles={{
        root: {
          background: '#C9C9C9',
        },
        icon: {
          '&:hover': {
            background: '#fff',
          },
        },
      }}
    >
      {children}
    </ActionIcon>
  );
}

// Type guard to check if the animal is in our map
const isValidAnimal = (animal: string): animal is AnimalName => {
  return Object.keys(animalIconMap).includes(animal);
};

// Define the type for our animal icon map
type AnimalIconMap = {
  [key in AnimalName]?: React.ForwardRefExoticComponent<any>;
};

// Define a union type of allowed animal names
type AnimalName = 'bat' | 'cat' | 'dog' | 'deer' | 'fish' | 'pig' | 'spider';

// Mapping of animal names to Tabler icon names
const animalIconMap: AnimalIconMap = {
  bat: TablerIcons.IconBat,
  cat: TablerIcons.IconCat,
  dog: TablerIcons.IconDog,
  deer: TablerIcons.IconDeer,
  fish: TablerIcons.IconFish,
  pig: TablerIcons.IconPig,
  spider: TablerIcons.IconSpider,
};

interface animalIconList {
  animals: string[];
}

function AnimalIconList({ animals }: animalIconList) {
  return (
    <Stack align="center" mt={10}>
      {animals.map((animal, index) => {
        // Use type guard to safely get the icon
        if (isValidAnimal(animal)) {
          const IconComponent = animalIconMap[animal];

          return IconComponent ? (
            <Icon key={index}>
              <IconComponent stroke={1.5} size={48} />
            </Icon>
          ) : null;
        }

        return (
          <div key={`${animal}-${index}`} className="flex flex-col items-center text-gray-500">
            <span>No icon for {animal}</span>
          </div>
        );
      })}
    </Stack>
  );
}

export function IconList() {
  const [navbarOpened, { toggle: toggleNavbar }] = useDisclosure(true);
  const [navbarMobileOpened, { toggle: toggleNavbarMobile }] = useDisclosure(false);
  const [headerOpened, { toggle: toggleHeader }] = useDisclosure(true);
  const [iconListOpened, { toggle: toggleIconList }] = useDisclosure(true);
  const [iconListMobileOpened, { toggle: toggleIconListMobile }] = useDisclosure(false);
  const [asideOpened, { toggle: toggleAside }] = useDisclosure(true);
  const [asideMobileOpened, { toggle: toggleAsideMobile }] = useDisclosure(false);
  const [footerOpened, { toggle: toggleFooter }] = useDisclosure(true);
  const [iconListAlt, { toggle: toggleIconListAlt }] = useDisclosure(false);
  const [navbarAlt, { toggle: toggleNavbarAlt }] = useDisclosure(false);
  const [asideAlt, { toggle: toggleAsideAlt }] = useDisclosure(false);

  const animals = ['bat', 'cat', 'dog', 'deer', 'fish', 'pig', 'spider'];

  const toggleIconListAltBtn = () => {
    if (navbarAlt) {
      toggleIconListAlt();
      toggleNavbarAlt();
    } else if (iconListAlt || !iconListAlt) {
      toggleIconListAlt();
    }
  };

  const toggleNavbarAltBtn = () => {
    if (!iconListAlt && !navbarAlt) {
      toggleIconListAlt();
      toggleNavbarAlt();
    } else if (iconListAlt || navbarAlt) {
      toggleNavbarAlt();
    }
  };

  return (
    <AppShell
      padding="md"
      iconList={{
        layout: iconListAlt ? 'alt' : undefined,
        width: { base: 50, md: 100 },
        breakpoint: 'sm',
        collapsed: { desktop: !iconListOpened, mobile: !iconListMobileOpened },
      }}
      navbar={{
        layout: navbarAlt ? 'alt' : undefined,
        width: { base: 100, md: 200 },
        breakpoint: 'sm',
        collapsed: { desktop: !navbarOpened, mobile: !navbarMobileOpened },
      }}
      header={{
        height: 60,
        collapsed: !headerOpened,
      }}
      aside={{
        layout: asideAlt ? 'alt' : undefined,
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: !asideOpened, mobile: !asideMobileOpened },
      }}
      footer={{
        height: 50,
        collapsed: !footerOpened,
      }}
    >
      <AppShell.IconList>
        <AppShell.Section component={ScrollArea}>
          <AnimalIconList animals={animals} />
          <AnimalIconList animals={animals} />
          <AnimalIconList animals={animals} />
        </AppShell.Section>
      </AppShell.IconList>
      <AppShell.Navbar>
        <AppShell.Section>First section</AppShell.Section>
        <AppShell.Section>Second section</AppShell.Section>
        <AppShell.Section grow>Grow section</AppShell.Section>
        <AppShell.Section>Last section</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <Stack>
          <Group>
            <Button onClick={toggleHeader} color={headerOpened ? 'blue.8' : 'gray.6'}>
              Toggle header
            </Button>
            <Button onClick={toggleFooter} color={footerOpened ? 'blue.8' : 'gray.6'}>
              Toggle footer
            </Button>
            <Button onClick={toggleIconList} color={iconListOpened ? 'blue.8' : 'gray.6'}>
              Toggle iconList
            </Button>
            <Button onClick={toggleNavbar} color={navbarOpened ? 'blue.8' : 'gray.6'}>
              Toggle navbar
            </Button>
            <Button onClick={toggleAside} color={asideOpened ? 'blue.8' : 'gray.6'}>
              Toggle aside
            </Button>
          </Group>
          <Divider />
          <Group>
            <Button onClick={toggleIconListAltBtn} color={iconListAlt ? 'green.8' : 'gray.6'}>
              Toggle iconList alt
            </Button>
            <Button onClick={toggleNavbarAltBtn} color={navbarAlt ? 'green.8' : 'gray.6'}>
              Toggle navbar alt
            </Button>
            <Button onClick={toggleAsideAlt} color={asideAlt ? 'green.8' : 'gray.6'}>
              Toggle aside alt
            </Button>
          </Group>
          <Divider />
          <Group>
            <Button
              onClick={toggleIconListMobile}
              color={iconListMobileOpened ? 'red.6' : 'gray.6'}
            >
              Toggle iconlist mobile
            </Button>
            <Button onClick={toggleNavbarMobile} color={navbarMobileOpened ? 'red.6' : 'gray.6'}>
              Toggle navbar mobile
            </Button>
            <Button onClick={toggleAsideMobile} color={asideMobileOpened ? 'red.6' : 'gray.6'}>
              Toggle aside mobile
            </Button>
          </Group>
        </Stack>

        <p>{longContent}</p>
      </AppShell.Main>
      <AppShell.Aside>Aside</AppShell.Aside>
      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
}

export function AltLayout() {
  const [opened, { toggle }] = useDisclosure(true);
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [headerOpened, { toggle: toggleHeader }] = useDisclosure(true);
  return (
    <AppShell
      padding="md"
      aside={{
        layout: 'alt',
        width: { base: 140 },
        breakpoint: 'sm',
        collapsed: { desktop: !opened, mobile: !mobileOpened },
      }}
      header={{
        height: 50,
        collapsed: !headerOpened,
      }}
      footer={{
        height: 50,
        collapsed: !headerOpened,
      }}
    >
      <AppShell.Aside>Aside</AppShell.Aside>
      <AppShell.Header>
        <Group justify="flex-end">
          <Button>Button hidden by the aside</Button>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Group>
          <Button onClick={toggleHeader}>Toggle header</Button>
          <Button onClick={toggle}>Toggle aside</Button>
          <Button onClick={toggleMobile}>Toggle aside mobile</Button>
        </Group>
        <p>Other content</p>
      </AppShell.Main>

      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
}

export function HeaderOnly() {
  const [headerOpened, { toggle: toggleHeader }] = useDisclosure(true);
  return (
    <AppShell
      padding="md"
      header={{
        height: 50,
        collapsed: !headerOpened,
      }}
    >
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <Group>
          <Button onClick={toggleHeader}>Toggle header</Button>
        </Group>
        <p>Other content</p>
      </AppShell.Main>
    </AppShell>
  );
}

export function Disabled() {
  const [disabled, { toggle }] = useDisclosure(true);
  return (
    <AppShell
      padding="md"
      disabled={disabled}
      navbar={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: false, mobile: false },
      }}
      header={{
        height: 50,
        collapsed: false,
      }}
    >
      <AppShell.Navbar>
        <Button>Focusable element 1</Button>
        <Button>Focusable element 2</Button>
      </AppShell.Navbar>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <Button onClick={toggle}>Toggle disabled</Button>
      </AppShell.Main>
    </AppShell>
  );
}

export function Unstyled() {
  const [navbarOpened, { toggle: toggleNavbar }] = useDisclosure(true);
  const [navbarMobileOpened, { toggle: toggleNavbarMobile }] = useDisclosure(false);
  const [asideOpened, { toggle: toggleAside }] = useDisclosure(true);
  const [asideMobileOpened, { toggle: toggleAsideMobile }] = useDisclosure(false);
  const [headerOpened, { toggle: toggleHeader }] = useDisclosure(true);
  const [footerOpened, { toggle: toggleFooter }] = useDisclosure(true);

  return (
    <AppShell
      padding="md"
      unstyled
      navbar={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: !navbarOpened, mobile: !navbarMobileOpened },
      }}
      aside={{
        width: { base: 200, md: 300 },
        breakpoint: 'sm',
        collapsed: { desktop: !asideOpened, mobile: !asideMobileOpened },
      }}
      header={{
        height: 50,
        collapsed: !headerOpened,
      }}
      footer={{
        height: 50,
        collapsed: !footerOpened,
      }}
    >
      <AppShell.Navbar>
        <AppShell.Section>First section</AppShell.Section>
        <AppShell.Section>Second section</AppShell.Section>
        <AppShell.Section grow>Grow section</AppShell.Section>
        <AppShell.Section>Last section</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <Group>
          <Button onClick={toggleHeader}>Toggle header</Button>
          <Button onClick={toggleFooter}>Toggle footer</Button>
          <Button onClick={toggleNavbar}>Toggle navbar</Button>
          <Button onClick={toggleNavbarMobile}>Toggle navbar mobile</Button>

          <Button onClick={toggleAside}>Toggle aside</Button>
          <Button onClick={toggleAsideMobile}>Toggle aside mobile</Button>
        </Group>
        <p>Other content</p>
      </AppShell.Main>

      <AppShell.Aside>Aside</AppShell.Aside>

      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
}

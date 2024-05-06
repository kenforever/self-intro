import { Button, Collapse, useDisclosure } from "@chakra-ui/react";

function Equipment(props) {
  const { isOpen, onToggle } = useDisclosure();

  const colorMap = {
    teal: {
      bg: '#B2F5EA', // Teal 100
      text: '#00494D' // Teal 900
    },
    yellow: {
      bg: '#FEFCBF', // Yellow 100
      text: '#653700' // Yellow 900
    },
    blue: {
      bg: '#BFDBFE', // Blue 100
      text: '#1E3A8A' // Blue 900
    },
    purple: {
      bg: '#E9D8FD', // Purple 100
      text: '#4C1D95' // Purple 900
    },
    green: {
      bg: '#D1FAE5', // Green 100
      text: '#064E3B' // Green 900
    },
    red: {
      bg: '#FEE2E2', // Red 100
      text: '#7F1D1D' // Red 900
    }
  };

  return (
    <>
      <div className="my-2 ">
        <Button
          onClick={onToggle}
          className="w-full p-4 rounded-lg text-2xl font-bold md:w-80 md:grid"
          style={{ backgroundColor: colorMap[props.color].bg, color: colorMap[props.color].text}}
        >
          {props.name}
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <div className="w-full p-4 rounded-b-lg text-black divide-y border-neutral-700 md:w-80 md:grid">
            {props.items.map((item) => (
              <p className="ml-4 py-1">{item}</p>
            ))}
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Equipment;

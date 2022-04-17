import { chakra, HStack, Icon, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, MouseEventHandler } from "react";

type Props = {
  text: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const NavbarReturn: FC<Props> = ({ text, onClick }) => {
  return (
    <HStack>
      <NextLink href="/" passHref>
        <chakra.a
          fill="brand.darkerBrown"
          _hover={{
            fill: "brand.red",
          }}
          transition="0.2s all"
          whiteSpace="nowrap"
          onClick={onClick}
        >
          <Icon viewBox="0 0 16 17" w="3rem" h="3rem">
            <path d="M11.3334 7.83313H6.27343L8.47343 5.6398C8.59896 5.51426 8.66949 5.344 8.66949 5.16646C8.66949 4.98893 8.59896 4.81867 8.47343 4.69313C8.34789 4.5676 8.17763 4.49707 8.00009 4.49707C7.82256 4.49707 7.6523 4.5676 7.52676 4.69313L4.19343 8.02647C4.13273 8.08987 4.08516 8.16463 4.05343 8.24647C3.98675 8.40877 3.98675 8.59082 4.05343 8.75313C4.08516 8.83497 4.13273 8.90973 4.19343 8.97313L7.52676 12.3065C7.58874 12.369 7.66247 12.4185 7.74371 12.4524C7.82495 12.4862 7.91209 12.5037 8.00009 12.5037C8.0881 12.5037 8.17524 12.4862 8.25648 12.4524C8.33772 12.4185 8.41145 12.369 8.47343 12.3065C8.53591 12.2445 8.58551 12.1708 8.61935 12.0895C8.6532 12.0083 8.67063 11.9211 8.67063 11.8331C8.67063 11.7451 8.6532 11.658 8.61935 11.5767C8.58551 11.4955 8.53591 11.4218 8.47343 11.3598L6.27343 9.16647H11.3334C11.5102 9.16647 11.6798 9.09623 11.8048 8.9712C11.9299 8.84618 12.0001 8.67661 12.0001 8.4998C12.0001 8.32299 11.9299 8.15342 11.8048 8.02839C11.6798 7.90337 11.5102 7.83313 11.3334 7.83313Z" />
          </Icon>
        </chakra.a>
      </NextLink>
      <Text color="brand.red" fontSize="1.5rem" fontWeight="800">
        {text}
      </Text>
    </HStack>
  );
};

export default NavbarReturn;

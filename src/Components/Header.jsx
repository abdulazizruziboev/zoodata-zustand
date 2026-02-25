import { Box , Button ,Tooltip } from "@mantine/core";
import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';

export default function Header() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const isLight = (colorScheme == "light");
  return (
    <Box className={`w-full min-h-[65px] shadow-sm px-4 flex justify-center items-center`}
    bg={isLight?"#ffffff":"#2e2e2e"}
    >
        <div className="max-w-[1440px] mx-auto my-auto flex items-center justify-between !w-full" >
            <a href="#" className="text-[18px]">ZooData</a>
        <Tooltip label={`${(computedColorScheme==="light")?"Tun":"Kun"} rejimiga o'tish`}>
        <Button className="!px-[0px] !w-[38.006px] !h-[36px]" variant="default" onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>
            {localStorage.getItem("mantine-color-scheme-value")=="light"?<span className="fa fa-moon opacity-50"></span>:<span className="fa fa-sun opacity-50"></span>}
        </Button>
        </Tooltip>
        </div>
    </Box>
  )
}

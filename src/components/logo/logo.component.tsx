import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/common/logo.png"
      // width={166}
      // height={51}
      layout={"fill"}
      alt={"Arena rank logo"}
    />
  );
};

export default Logo;

import { useTranslations } from "next-intl";

interface Props {
  index: number;
  isHidden: boolean;
  handleMore: (index: number) => void;
}

export default function RMore({ index, isHidden, handleMore }: Props) {

  const g = useTranslations("Global")

  return (
    <>
      <div onClick={() => handleMore(index)} className="r-more">
        <p className="blue">{isHidden ? ("... " + (g('s-more'))) : ("... " + (g('s-less')))}</p>
      </div>
    </>
  );
}

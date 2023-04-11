type Props = {
  symbol?: JSX.Element
}

const SeparatorSpan = ({ symbol }: Props) => <span className="font-medium mx-2">{symbol || <>&#8226;</>}</span>

export default SeparatorSpan

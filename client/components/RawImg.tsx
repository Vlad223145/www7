interface RawImgProps {
  loading?: "lazy" | "eager";
  alt: string;
  image: string;
  css?: React.CSSProperties;
}

export function RawImg({ loading = "lazy", alt, image, css }: RawImgProps) {
  return (
    <img
      loading={loading}
      alt={alt}
      src={image}
      style={css}
    />
  );
}

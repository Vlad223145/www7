interface CustomCodeProps {
  $tagName?: string;
  xmlns?: string;
  width?: string;
  height?: string;
  viewbox?: string;
  $name?: string;
  code?: string;
  css?: React.CSSProperties;
  children?: React.ReactNode;
}

export function CustomCode({ 
  $tagName = "div", 
  xmlns, 
  width, 
  height, 
  viewbox, 
  $name, 
  code, 
  css, 
  children 
}: CustomCodeProps) {
  if (code) {
    return (
      <div 
        style={css}
        dangerouslySetInnerHTML={{ __html: code }}
      />
    );
  }

  const TagName = $tagName as keyof JSX.IntrinsicElements;
  
  return (
    <TagName 
      style={css}
      {...(xmlns && { xmlns })}
      {...(width && { width })}
      {...(height && { height })}
      {...(viewbox && { viewBox: viewbox })}
    >
      {children}
    </TagName>
  );
}

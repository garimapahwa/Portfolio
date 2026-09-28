// Wraps content that should fade up on scroll. `delay` staggers siblings (in 90ms steps).
export default function Reveal({ as: Tag = "div", delay = 0, style, children, ...rest }) {
  return (
    <Tag data-reveal="" style={{ "--reveal-delay": delay, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

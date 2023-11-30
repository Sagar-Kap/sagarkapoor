export default function MySidebar(props) {
  return (
    <aside>
      <header>{props.title}</header>
      <main>{props.children}</main>
      {props.menu}
      <footer>{props.socialLinks}</footer>
    </aside>
  );
}

export interface HeaderMenu {
  item1: string;
  item2: string;
  item3: string;
}

export const Header = ({item1, item2, item3}: HeaderMenu) => {
  return (
    <header>
      <h1 className="headline">Sample</h1>
      <ul className="nav-list">
        <li className="nav-list-item">{item1}</li>
        <li className="nav-list-item">{item2}</li>
        <li className="nav-list-item">{item3}</li>
      </ul>
    </header>
  );
}

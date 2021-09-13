const ContentList = ({ content }) => {
  return (
    <ul>
      {content.map((contents) => <li style={{display: 'inline-block'}} key={contents.id}><img alt={contents.name} src={contents.image}/></li>)}
    </ul>
  );
};

export default ContentList;

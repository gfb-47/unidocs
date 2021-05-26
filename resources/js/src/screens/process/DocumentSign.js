import React from 'react'
import WebViewer from '@pdftron/webviewer';
import { useLocation, useHistory } from 'react-router-dom';
import './Document.css';

export default function DocumentSign() {
  const history = useHistory();
  const viewer = React.useRef(null);
  const location = useLocation();
  const link = location.state.link;
  React.useEffect(() => {
    WebViewer(
      {
        path: '/pdfsign/lib',
        initialDoc: `/storage/${link}`,
      },
      viewer.current,
    ).then((instance) => {
      const { docViewer, Annotations } = instance;
      const annotManager = docViewer.getAnnotationManager();

      docViewer.on('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation();
        rectangleAnnot.PageNumber = 1;
        // values are in page coordinates with (0, 0) in the top left
        rectangleAnnot.X = 100;
        rectangleAnnot.Y = 150;
        rectangleAnnot.Width = 200;
        rectangleAnnot.Height = 50;
        rectangleAnnot.Author = annotManager.getCurrentUser();

        annotManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotManager.redrawAnnotation(rectangleAnnot);
      });
    });
  }, []);
  return (
    <div className="Document">
      <div className="webviewer" ref={viewer}></div>

    </div>
  )
}

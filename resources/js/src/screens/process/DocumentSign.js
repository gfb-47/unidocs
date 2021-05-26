import React from 'react'
import WebViewer from '@pdftron/webviewer';
import { useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import './App.css';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: '0 8px',
  },
  container: {
    width: '100%',
    display: 'block',
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%'
  },
  card: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    minHeight: 640,
    margin: '0 128px'
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  status: {
    display: 'flex',
    alignItems: 'center',
  },
  statusText: {
    marginLeft: theme.spacing(1),
  },
  title: {
    fontSize: '2.25rem',
  },
  subtitle: {
    fontSize: '0.875rem',
    opacity: 0.5,
  },
  knowladgeArea: {
    display: 'flex',
    alignItems: 'center',
  },
  dataWrapper: {
  },
  dataHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  dataTitle: {
    opacity: 0.75,
  },
  data: {
    fontSize: '0.75rem',
    fontWeight: 400,
  },
  descriptionWrapper: {
    paddingLeft: theme.spacing(2),
  },
  description: {
    paddingLeft: theme.spacing(3),
  },
  footer: {
    margin: theme.spacing(3),
    textAlign: 'right'
  },

}));
export default function DocumentSign() {
  const classes = useStyles();

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

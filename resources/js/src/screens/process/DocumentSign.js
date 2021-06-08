import React from 'react'
import WebViewer from '@pdftron/webviewer';
import { useLocation, useHistory } from 'react-router-dom';
import '../../styles/document_style.css';
import axios from 'axios';
import { Context } from '../../components/Store';
import { setLoading } from '../../utils/actions';
import { toast } from 'react-toastify';

export default function DocumentSign() {
  const history = useHistory();
  const viewer = React.useRef(null);
  const [, dispatch] = React.useContext(Context);
  const location = useLocation();
  const link = location.state.link;
  const fileName = location.state.name;
  const processId = location.state.processId;
  const termId = location.state.termId;
  React.useEffect(() => {
    WebViewer(
      {
        path: '/pdfsign/lib',
        initialDoc: `/storage/${link}`,
      },
      viewer.current,
    ).then((instance) => {
      const { docViewer, annotManager } = instance;

      instance.setHeaderItems(header => {
        header.push({
          type: 'actionButton',
          img: 'upload-cloud.svg',

          onClick: async () => {
            try {

              dispatch(setLoading(true));
              const doc = docViewer.getDocument();
              const xfdfString = await annotManager.exportAnnotations();
              const options = { xfdfString };
              const data = await doc.getFileData(options);
              const arr = new Uint8Array(data);
              const blob = new Blob([arr], { type: 'application/pdf' });
              const formData = new FormData();
              formData.set('file', blob, fileName);
              formData.append('fileName', fileName);
              formData.append('process_id', processId);
              formData.append('term_id', termId);
              await axios.post(`${getUrl()}/api/v1/process/documentsign/document`, formData);
              toast.success('👍📝 Assinado Com Sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTimeout(history.goBack, 500)
            } catch (err) {
              toast.error('❌ Um erro inesperado aconteceu', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } finally {
              dispatch(setLoading(false));
            }
          }
        });
      });
    });
  }, []);
  return (
    <div className="Document">
      <div className="webviewer" ref={viewer}></div>

    </div>
  )
}

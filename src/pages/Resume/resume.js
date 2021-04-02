const url= '../../assets/resume/Resume_SDE.pdf';

let pdfDoc=null,
  pageNum =1,
  pageIsRendering=false,
  pageNumIsPending=null;

const scale = 1.5,
  canvas=document.querySelector('#pdf-render'),
  ctx = canvas.getContext('2d');

//Render the Page

const renderPage=num =>
{
  pageIsRendering=true;
  //Get the page 
  pdfDoc.getPage(num).then(page=>
    {
      const viewport = page.getViewport({scale:scale});
      canvas.height= viewport.height;
      canvas.width = viewport.width;

      const renderCtx=
      {
        canvasContext : ctx,
        viewport
      }
      page.render(renderCtx).promise.then(()=>
      {
        pageIsRendering=false;
        
        if(pageNumIsPending !==null)
        {
          renderPage(pageNumIsPending);
          pageIsPending = null;

        }
      });
      //output the current page
      document.querySelector('#page-num').textContext = num;  
    });
};

//Get the document
pdfjsLib.getDocument(url).promise.then(pdfDoc_=>
  {
    pdfDoc = pdfDoc_;
    console.log(pdfDoc_);
    document.querySelector('#page-count').textContent =pdfDoc.numPages;
    renderPage(pageNum);
  });
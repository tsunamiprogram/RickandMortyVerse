const paginationLogic = (currentPage, residents) => {
    if(residents.length === 0 ) {
        return {
            pages: [1],
            residentsInPage:[]
        }
    }
  const Residents_Per_Page = 20;
  const totalPages = Math.ceil(residents.length / Residents_Per_Page);
  // residentes de la pagina actual
  const sliceEnd = Residents_Per_Page * currentPage;
  const sliceStart = sliceEnd - Residents_Per_Page;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);
  // paginas a mostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return{
    residentsInPage,
    pages,
  }
};

export default paginationLogic;

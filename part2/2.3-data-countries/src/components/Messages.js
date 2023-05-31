function ErrorMsg({errorMsg}) {

    return (
      <div className="error">
          <p>{errorMsg}</p>
      </div>
    );
  }
  
  function SuccessMsg() {

    return (
      <div className="success">
          <p></p>
      </div>
    );
  }

  export {
   ErrorMsg,
   SuccessMsg 
  }
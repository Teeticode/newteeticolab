import React,{memo} from "react";

function Backend(){
    return(
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Express Js</h3>
                            <span className="skills__level">Profecient</span>
                        </div>
                        
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Node Js</h3>
                            <span className="skills__level">Expert</span>
                        </div>
                        
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Fast Api</h3>
                            <span className="skills__level">Profecient</span>
                        </div>
                        
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">.Net</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                        
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                        
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">C#</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default memo(Backend)
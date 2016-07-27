/**
 * Created by justin on 7/10/16.
 */
import * as React from 'react';
import * as classNames from 'classnames';
import DefaultModal from '../../App/components/DefaultModal';
import { Link } from 'react-router';
import '../styles/welcomesplashscreen.scss';

export default class WelcomeSplashScreen extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      didAgreeToEula: localStorage.getItem('steamDidAgreeToEula') === 'true'
    };
  }

  onChangeHandler(event) {
    localStorage.setItem('steamDidAgreeToEula', event.target.checked);
    this.setState({
      didAgreeToEula: !this.state.didAgreeToEula
    });
  }

  openEula() {
    this.setState({
      isEulaOpen: true
    });
  }

  agree() {
    localStorage.setItem('steamDidAgreeToEula', true);
    this.setState({
      didAgreeToEula: true
    });
    this.close();
  }

  close() {
    this.setState({
      isEulaOpen: false
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div className="welcome-splash-screen">
        <DefaultModal className="eula-modal" open={this.state.isEulaOpen}>
          <div className="eula-content">
            <div className="eula-text">
              PLEASE READ THIS H2O.AI STEAM EVALUATION AGREEMENT (“AGREEMENT”) CAREFULLY BEFORE USING THE EVALUATION SOFTWARE OFFERED BY H2O.AI, INC. (“H2O.AI”).  BY CLICKING THE “AGREE” (OR SIMILAR) BUTTON ON AN ONLINE ORDER FORM, BY USING THE EVALUATION SOFTWARE IN ANY MANNER, OR BY SIGNING AN ORDER FORM WHICH REFERENCES THESE EVALUATION TERMS AND CONDITIONS (AS APPLICABLE) YOU OR THE ENTITY YOU REPRESENT (“LICENSEE”) AGREE THAT YOU HAVE READ AND AGREE TO BE BOUND BY AND A PARTY TO THE TERMS AND CONDITIONS OF THIS AGREEMENT TO THE EXCLUSION OF ALL OTHER TERMS, YOU REPRESENT AND WARRANT THAT YOU ARE AUTHORIZED TO BIND LICENSEE.  IF THE TERMS OF THIS AGREEMENT ARE CONSIDERED AN OFFER, ACCEPTANCE IS EXPRESSLY LIMITED TO SUCH TERMS.
H2O.ai Steam Evaluation Agreement
WHEREAS, H2O.ai is willing to supply, within the protection of a confidential relationship, the software, services and related materials provided in connection with this Agreement (collectively, the “Evaluation Software”) to Licensee solely for internal evaluation purposes and not for any production use (“Evaluation”);
NOW, THEREFORE, in consideration of the foregoing and the mutual covenants hereinafter set forth, the parties hereby agree as follows:
Use of Evaluation Software. Subject to the terms of this Agreement, H2O.ai hereby grants to Licensee a personal, nontransferable, nonsublicensable, nonexclusive, revocable license to access and use the Evaluation Software only in accordance with all documentation supplied by H2O.ai solely for Licensee’s internal Evaluation purposes during the term of this Agreement. H2O.ai shall at all times retain all title to and ownership of the Evaluation Software and all intellectual property rights relating thereto. Licensee agrees to use the Evaluation Software only in the ordinary course of its Evaluation. Licensee shall not (and shall not allow any third party to): (a) decompile, disassemble, or otherwise reverse engineer any portion of the Evaluation Software; (b) remove, alter or obscure any product identification, copyright or other notices contained on or in the Evaluation Software; (c) disclose, provide, distribute, resell, lease, lend or allow access to the Evaluation Software to any third party; (d) use the Evaluation Software for timesharing or service bureau purposes, or otherwise for the benefit of any third party; (e) copy, modify, adapt or create a derivative work of any part of the Evaluation Software; (f) use the Evaluation Software in excess of any limitations provided by H2O.ai;(g) use the Evaluation Software to help develop any competitive product or service; (h) remove or export the Evaluation Software or any direct product thereof from the United States. H2O
Feedback. If Licensee proposes any modifications, derivatives, enhancements or improvements to the Evaluation Software (“Feedback”), then notwithstanding anything else, Licensee hereby grants H2O.ai a perpetual, irrevocable, royalty free, fully paid-up, sub-licensable, right and license to use, display, reproduce, distribute and otherwise fully exploit such Feedback for any purposes.
Warning. THE EVALUATION SOFTWARE MAY CONTAIN A ROUTINE THAT CAUSES THE EVALUATION SOFTWARE TO CEASE PROPER FUNCTIONING AFTER A CERTAIN PERIOD OF TIME. THIS MAY OCCUR BEFORE OR AFTER TERMINATION OF THE LICENSE, SO LICENSEE MUST BE PREPARED AT ALL TIMES AND MAY NOT RELY ON THE EVALUATION SOFTWARE
Warranty Disclaimer.  The parties acknowledge that the Evaluation Software are provided “AS IS” and may not be functional on any machine or in any environment. H2O.AI DISCLAIMS ALL WARRANTIES RELATING TO THE EVALUATION SOFTWARE, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTIES AGAINST INFRINGEMENT OF THIRD-PARTY RIGHTS, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
Limitation of Remedies and Damages. H2O.AI SHALL NOT BE RESPONSIBLE OR LIABLE TO THE OTHER PARTY WITH RESPECT TO ANY SUBJECT MATTER OF THIS AGREEMENT UNDER ANY CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER THEORY (A) FOR LOSS OR INACCURACY OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (B) FOR ANY SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, RELIANCE, OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO LOSS OF REVENUES AND LOSS OF PROFITS, OR (C) FOR DAMAGES OF ANY KIND WHATSOEVER ARISING OUT OF THIS AGREEMENT IN EXCESS OF $100. H2O.AI SHALL NOT BE RESPONSIBLE FOR ANY MATTER BEYOND ITS REASONABLE CONTROL.
Nonassignability. Although fully assignable and transferable by H2O.ai, neither the rights nor the obligations arising under this Agreement are assignable or transferable by Licensee, and any such attempted assignment or transfer shall be void and without effect.
Controlling Law, Attorneys’ Fees and Severability. This Agreement shall be governed by and construed in accordance with the laws of the State of California without regard to the conflicts of laws provisions therein. In any action to enforce this Agreement the prevailing party will be entitled to costs and attorneys’ fees. In the event that any of the provisions of this Agreement shall be held by a court or other tribunal of competent jurisdiction to be unenforceable, such provisions shall be limited or eliminated to the minimum extent necessary so that this Agreement shall otherwise remain in full force and effect and enforceable.
Entire Agreement. This Agreement constitutes the entire agreement between the parties pertaining to the subject matter hereof.  Any modifications of this Agreement must be in writing and signed by both parties.
Term; Termination. This Agreement shall become effective upon Licensee’s first access to or use of the Evaluation Software (“Start Date”) .This Agreement may be terminated by either party for any reason or no reason upon written notice to the other party, or immediately upon notice of any breach by Licensee of the provisions of this Agreement, and in any case will terminate ninety (90) days from the Start Date, unless extended by H2O.ai in writing.  Upon termination, the license granted hereunder will terminate and Licensee shall promptly cease accessing the Evaluation Software, and shall return any and all documents, notes and other materials regarding the Evaluation Software to H2O.ai, including, without limitation, all copies and extracts of the foregoing, but the terms of this Agreement will otherwise remain in effect.
            </div>
            <div className="buttons-container">
              <button className="default" onClick={this.agree.bind(this)}>I Agree</button>
              <button className="default" onClick={this.close.bind(this)}>Cancel</button>
            </div>
          </div>
        </DefaultModal>
        <div className="welcome-splash-screen--content">
          <div>WELCOME TO</div>
          <div className="welcome-splash-screen--content--product-name">H<sub>2</sub>O STEAM</div>
          <div>Fast, distributed data science for teams</div>
          <div><Link to="/projects/new" className={classNames('default', {disabled: !this.state.didAgreeToEula})}>Start A New Project</Link>
          </div>
          <div className="eula-line">
            <input type="checkbox" checked={this.state.didAgreeToEula} onChange={this.onChangeHandler.bind(this)}/>
            I understand this is a preview release, and agree with all <a href="javascript:void(0);" onClick={this.openEula.bind(this)}>terms and conditions</a>.
          </div>
        </div>
      </div>
    );
  }
}

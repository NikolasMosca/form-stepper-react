import React, { Component } from 'react';
import './App.scss';
import UploadImage from './assets/images/upload_image.png';

import Slide from './components/Slide';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Button from './components/Button';
import FieldText from './components/FieldText';
import FieldSelect from './components/FieldSelect';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page : 1,

      //Fields
      shopName: '',
      shopCity: '',
      shopAddress: '',
      shopCap: '',
      shopSite:'',
      discountType: '',
      offerDescription: '',

      name: '',
      surname: '',
      telephone: '',
      email: '',
      howDidYouKnowUs: '',
      termsConfirmation: '',

      packageType: '',

      shopImage: '',
      shopDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      eInvoiceData1: '',
      eInvoiceData2: '',
      eInvoiceData3: '',
      eInvoiceData4: '',

      emailFeedback: '',
      emailMessage: ''
    };
  }

  createSlides = (slides) => {
    const { page, currentIndex = (page - 1) } = this.state;
    let items = [];
    slides.map((item, index) => {
      item.currentIndex = currentIndex;
      item.page = index;
      return items.push(this.createSlide(item))
    })
    return items;
  }

  createSlide = (item) => {
    return <Slide key={item.page} {...item}/>;
  }

  createFieldText = (name, placholder, value) => {
    return <FieldText 
      name={name} 
      placeholder={placholder} 
      value={value} 
      onChange={(e) => this.handleChange(e)}
    />
  }

  createFieldSelect = (name, placholder, value, values) => {
    return <FieldSelect 
      name={name} 
      placeholder={placholder}
      value={value} 
      options={values}
      onChange={(e) => this.handleChange(e)}
    />
  }

  findHelp = (slides, index) => {
    return (slides && slides[index] && typeof slides[index].help !== undefined) ? slides[index].help : false;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { 
      page, 
      index = (page - 1),

      //Fields 
      shopName,
      shopCity,
      shopAddress,
      shopCap,
      shopSite,
      discountType,
      offerDescription,

      name,
      surname,
      telephone,
      email,
      howDidYouKnowUs,
      termsConfirmation,

      packageType,

      shopDescription,
      eInvoiceData1,
      eInvoiceData2,
      eInvoiceData3,
      eInvoiceData4,

      emailFeedback,
      emailMessage
    } = this.state;

    const slides = [

      //SLide 1
      {
        text: (
          <div>
            Crea un deal per la tua <br/> attività in pochi <br/> passaggi
          </div>
        ),
        form: (
          <Button text="Iniziamo" type="white" onClick={() => {
            this.setState({
              page: page + 1
            })
          }}/>
        ),
        help: (
          <div>
            Per ricevere supporto o informazioni chiamaci al numero del nostro customer care 
            <br/>
            <strong>+XX XXX XXXXX</strong>
          </div>
        ),
        size: 'Huge'
      }, 
      
      //SLide 2  
      {
        text: (
          <div> Primo step. Informazioni dell'azienda </div>
        ),
        form: (
          <div>
            <div className="FieldsContainer">
              { this.createFieldText("shopName", "Nome negozio *", shopName) }
              <div className="Flex">
                { this.createFieldText("shopCity", "Città", shopCity) }
                { this.createFieldText("shopAddress", "Indirizzo", shopAddress) }
              </div>
              <div className="Flex">
                { this.createFieldText("shopCap", "CAP", shopCap) }
                { this.createFieldText("shopSite", "Sito", shopSite) }
              </div>
              { this.createFieldSelect("discountType", "Tipologia sconto *", discountType, [
                {label:'option 1', value: 'value 1' }
              ]) }
              { this.createFieldText("offerDescription", "Descrizione dell'offerta *", offerDescription) }
            </div>
            <div className="ButtonsContainer">
              <Button text="Indietro" onClick={() => {
                this.setState({
                  page: page - 1
                })
              }}/>
              <Button text="Procedi" type="white" onClick={() => {

                if(shopName.length === 0) {
                  alert('Nome negozio non inserito');
                  return;
                }
                if(discountType.length === 0) {
                  alert('Tipologia sconto non inserito');
                  return;
                }
                if(offerDescription.length === 0) {
                  alert('Descrizione dell\'offerta non inserito');
                  return;
                }

                this.setState({
                  page: page + 1
                })
              }}/>
            </div>
          </div>
        ),
        help: (
          <div>
            Se la tua attività non è corretta puoi modificarla direttamente dal nostro sito, 
            se invece i dati non sono aggiornati dovrai correggerli direttamente dalla sezione 
            della tua attività su google maps
          </div>
        ),
        size: 'Large'
      },

      //SLide 3
      {
        text: (
          <div> Secondo step. Su di te </div>
        ),
        form: (
          <div>
            <div className="FieldsContainer">
              <div className="Flex">
                { this.createFieldText("name", "Nome *", name) }
                { this.createFieldText("surname", "Cognome *", surname) }
              </div>
              <div className="Flex">
                { this.createFieldText("telephone", "Numero di telefono *", telephone) }
                { this.createFieldText("email", "Indirizzo email *", email) }
              </div>
              { this.createFieldSelect("howDidYouKnowUs", "Come ci hai conosciuto? *", howDidYouKnowUs, [
                {label:'option 1', value: 'value 1' },
                {label:'option 2', value: 'value 2' }
              ]) }

              <div className="CheckboxContainer">
                <div className={ "CheckboxItem " + ((termsConfirmation) ? 'active' : '') } onClick={() => {
                  this.handleChange({
                    target : {
                      name : 'termsConfirmation',
                      value : !termsConfirmation
                    }
                  })
                }}></div>
                Accetta i termini e le condizioni
              </div>
            </div>
            <div className="ButtonsContainer">
              <Button text="Indietro" onClick={() => {
                this.setState({
                  page: page - 1
                })
              }}/>
              <Button text="Procedi" type="white" onClick={() => {

                if(name.length === 0) {
                  alert('Nome non inserito');
                  return;
                }
                if(surname.length === 0) {
                  alert('Cognome non inserito');
                  return;
                }
                if(telephone.length === 0) {
                  alert('Numero di telefono non inserito');
                  return;
                }
                if(email.length === 0) {
                  alert('Indirizzo email non inserito');
                  return;
                }
                if(howDidYouKnowUs.length === 0) {
                  alert('Come ci hai conosciuto? non inserito');
                  return;
                }
                if(!termsConfirmation) {
                  alert('E\' necessario accettare i termini e le condizioni per proseguire');
                  return;
                }

                this.setState({
                  page: page + 1
                })
              }}/>
            </div>
          </div>
        ),
        size: 'Large'
      },

      //SLide 4
      {
        text: (
          <div> Terzo step. Scegli il tuo pacchetto </div>
        ),
        form: (
          <div>
            <div className="FieldsContainer">
              { this.createFieldSelect("packageType", "Tipologia pacchetto *", packageType, [
                {label:'option 1', value: 'value 1' },
                {label:'option 2', value: 'value 2' }
              ]) }

              <div className="Text">
                <strong>Vantaggi</strong>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt 
                  in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </div>
            <div className="ButtonsContainer">
              <Button text="Indietro" onClick={() => {
                this.setState({
                  page: page - 1
                })
              }}/>
              <Button text="Paga ora" type="white" onClick={() => {

                if(packageType.length === 0) {
                  alert('Tipologia pacchetto non inserita');
                  return;
                }

                this.setState({
                  page: page + 1
                })
              }}/>
            </div>
          </div>
        ),
        size: 'Large'
      },

      //SLide 5
      {
        text: (
          <div> Ultimo step. Sei a un passo dalla fine </div>
        ),
        form: (
          <div>
            <div className="FieldsContainer">
              <div className="Flex">
                <img src={ UploadImage } alt="Carica l'immagine della tua attività"/>
                <textarea name="shopDescription" value={shopDescription} onChange={(e) => this.handleChange(e)}></textarea>
              </div>
              <div className="Flex">
                { this.createFieldText("eInvoiceData1", "Dati fatturazione elettronica *", eInvoiceData1) }
                { this.createFieldText("eInvoiceData2", "Dati fatturazione elettronica *", eInvoiceData2) }
              </div>
              <div className="Flex">
                { this.createFieldText("eInvoiceData3", "Dati fatturazione elettronica *", eInvoiceData3) }
                { this.createFieldText("eInvoiceData4", "Dati fatturazione elettronica *", eInvoiceData4) }
              </div>
            </div>
            <div className="ButtonsContainer">
              <Button text="Indietro" onClick={() => {
                this.setState({
                  page: page - 1
                })
              }}/>
              <Button text="Termina" type="white" onClick={() => {

                if(eInvoiceData1.length === 0) {
                  alert('Dati fatturazione elettronica non inserito');
                  return;
                }
                if(eInvoiceData2.length === 0) {
                  alert('Dati fatturazione elettronica non inserito');
                  return;
                }
                if(eInvoiceData3.length === 0) {
                  alert('Dati fatturazione elettronica non inserito');
                  return;
                }
                if(eInvoiceData4.length === 0) {
                  alert('Dati fatturazione elettronica non inserito');
                  return;
                }

                this.setState({
                  page: page + 1
                })
              }}/>
            </div>
          </div>
        ),
        size: 'Large'
      },

      //SLide 6
      {
        text: (
          <div style={{textAlign: 'center'}}> Finito! </div>
        ),
        form: (
          <div>
            <div className="FieldsContainer">
              <div className="Text">
                <div style={{textAlign: 'center'}}>
                  Facci sapere se è stato semplice o scrivici se hai avuto qualche problema. <br/>
                  Risponderemo il più velocemente possibile.
                </div>
              </div>
              { this.createFieldText("emailFeedback", "Indirizzo mail", emailFeedback) }
              { this.createFieldText("emailMessage", "Il tuo messaggio", emailMessage) }
            </div>
            <div className="ButtonsContainer">
              <Button text="Invia" type="white" onClick={() => {
                console.log('Finish!', this.state)
              }}/>
            </div>
          </div>
        ),
        size: 'Large'
      }
    ];

    return (
      <div className={ "AppContainer GradientSlide" + page }>
        <div className="TopGlass"></div>
        <main className="AppMainContainer">
          <LeftSide help={this.findHelp(slides, index)}/>
          <div className="SlideListContainer">
            { this.createSlides(slides) }
          </div>
          <RightSide active={page} pages={slides.length}/>
        </main>
      </div>
    );
  }
}

export default App;

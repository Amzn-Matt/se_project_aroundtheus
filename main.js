!function(){"use strict";class e{constructor(e,t,s){this._name=e.name,this._link=e.link,this._cardSelector=t,this._handleCardClick=s}_setEventListeners(){this._likeButton.addEventListener("click",(()=>{this._handleLikeBtn()})),this._deleteButton.addEventListener("click",(()=>{this._handleDeleteBtn()})),this._cardImageElement.addEventListener("click",(()=>{this._handleCardClick({name:this._name,link:this._link})}))}_handleLikeBtn(){this._likeButton.classList.toggle("card__like-button_active")}_handleDeleteBtn(){this._cardElement.remove()}generateCard(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._likeButton=this._cardElement.querySelector(".card__like-button"),this._deleteButton=this._cardElement.querySelector(".card__delete-button"),this._cardImageElement=this._cardElement.querySelector(".card__image"),this._cardTitleElement=this._cardElement.querySelector(".card__title"),this._cardTitleElement.textContent=this._name,this._cardImageElement.src=this._link,this._cardImageElement.alt=this._link,this._setEventListeners(),this._cardElement}}class t{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t)}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose=e=>{"Escape"===e.key&&this.close()};_closeOnRemoteClick=e=>{(e.target===e.currentTarget||e.target.classList.contains("modal__close"))&&this.close()};setEventListeners(){this._popupElement.addEventListener("mousedown",this._closeOnRemoteClick)}}class s extends t{constructor(e,t){super({popupSelector:e}),this._handleFormSubmit=t,this._popupForm=this._popupElement.querySelector(".modal__form"),this._inputValues=this._popupElement.querySelectorAll(".modal__form-input")}_getInputValues(){const e={};return this._inputValues.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){super.setEventListeners(),this._popupElement.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues())}))}close(){super.close(),this._popupForm.reset()}}const n=document.querySelector(".profile__edit-button"),i=document.querySelector("#profile-title-input"),r=document.querySelector("#profile-description-input"),o=document.querySelector(".profile__add-button"),a=document.querySelector(".cards__list"),l=new class{constructor(e,t){let{items:s,renderer:n}=e;this._items=s,this._renderer=n,this._selector=t}renderItems(){this._items.forEach((e=>{this._renderer(e)}))}addItem(e){this._selector.prepend(e)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],renderer:e=>{const t=d(e);l.addItem(t)}},a);l.renderItems();const c=new class{constructor(e){let{nameSelector:t,jobSelector:s}=e;this._nameElement=document.querySelector(t),this._jobElement=document.querySelector(s)}getUserInfo(){return{userName:this._nameElement.textContent,userJob:this._jobElement.textContent}}setUserInfo(e){this._nameElement.textContent=e.title,this._jobElement.textContent=e.description}}({nameSelector:".profile__title",jobSelector:".profile__description"}),u=new s("#edit-modal",(function(e){c.setUserInfo(e),u.close()}));u.setEventListeners();const m=new s("#add-modal",(function(e){const{name:t,link:s}=e,n=d({name:t,link:s});l.addItem(n),m.close()}));m.setEventListeners();const _=new class extends t{constructor(e){super({popupSelector:e}),this._imgPreview=this._popupElement.querySelector(".modal__image-preview"),this._imgPreviewTitle=this._popupElement.querySelector(".modal__image-title")}open(e){this._imgPreview.src=e.link,this._imgPreview.alt=e.name,this._imgPreviewTitle.textContent=e.name,super.open()}}("#preview-modal");function d(t){return new e(t,"#card-template",h).generateCard()}function h(e){_.open(e)}_.setEventListeners(),n.addEventListener("click",(function(){const e=c.getUserInfo();i.value=e.userName,r.value=e.userJob,p["profile-form"].resetValidation(),u.open()})),o.addEventListener("click",(function(){p["card-form"].resetValidation(),m.open()}));const p={};var E;E={formSelector:".modal__form",inputSelector:".modal__form-input",submitButtonSelector:".modal__form-button",inactiveButtonClass:"modal__form-button_disabled",inputErrorClass:"modal__form-input_type_error",errorClass:"modal__error_visible"},Array.from(document.querySelectorAll(E.formSelector)).forEach((e=>{const t=new class{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=t,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}_showInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}_hasInvalidInput(){return this._inputList.some((e=>!e.validity.valid))}_disableSubmitBtn(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}_activateSubmitBtn(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}_toggleButtonState(){this._hasInvalidInput()?this._disableSubmitBtn():this._activateSubmitBtn()}resetValidation(){this._toggleButtonState(),this._inputList.forEach((e=>{this._hideInputError(e)}))}_setEventListeners(){this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}enableValidation(){this._formElement.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}}(E,e),s=e.getAttribute("name");p[s]=t,t.enableValidation()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBQWUsTUFBTUEsRUFDbkJDLFdBQUFBLENBQVlDLEVBQU1DLEVBQWNDLEdBQzlCQyxLQUFLQyxNQUFRSixFQUFLSyxLQUNsQkYsS0FBS0csTUFBUU4sRUFBS08sS0FDbEJKLEtBQUtLLGNBQWdCUCxFQUNyQkUsS0FBS00saUJBQW1CUCxDQUMxQixDQUVBUSxrQkFBQUEsR0FDRVAsS0FBS1EsWUFBWUMsaUJBQWlCLFNBQVMsS0FDekNULEtBQUtVLGdCQUFnQixJQUd2QlYsS0FBS1csY0FBY0YsaUJBQWlCLFNBQVMsS0FDM0NULEtBQUtZLGtCQUFrQixJQUd6QlosS0FBS2Esa0JBQWtCSixpQkFBaUIsU0FBUyxLQUMvQ1QsS0FBS00saUJBQWlCLENBQUVKLEtBQU1GLEtBQUtDLE1BQU9HLEtBQU1KLEtBQUtHLE9BQVEsR0FFakUsQ0FFQU8sY0FBQUEsR0FDRVYsS0FBS1EsWUFBWU0sVUFBVUMsT0FBTywyQkFDcEMsQ0FFQUgsZ0JBQUFBLEdBQ0VaLEtBQUtnQixhQUFhQyxRQUNwQixDQUVBQyxZQUFBQSxHQW1CRSxPQWxCQWxCLEtBQUtnQixhQUFlRyxTQUNqQkMsY0FBY3BCLEtBQUtLLGVBQ25CZ0IsUUFBUUQsY0FBYyxTQUN0QkUsV0FBVSxHQUVidEIsS0FBS1EsWUFBY1IsS0FBS2dCLGFBQWFJLGNBQWMsc0JBQ25EcEIsS0FBS1csY0FBZ0JYLEtBQUtnQixhQUFhSSxjQUNyQyx3QkFHRnBCLEtBQUthLGtCQUFvQmIsS0FBS2dCLGFBQWFJLGNBQWMsZ0JBQ3pEcEIsS0FBS3VCLGtCQUFvQnZCLEtBQUtnQixhQUFhSSxjQUFjLGdCQUN6RHBCLEtBQUt1QixrQkFBa0JDLFlBQWN4QixLQUFLQyxNQUMxQ0QsS0FBS2Esa0JBQWtCWSxJQUFNekIsS0FBS0csTUFDbENILEtBQUthLGtCQUFrQmEsSUFBTTFCLEtBQUtHLE1BRWxDSCxLQUFLTyxxQkFFRVAsS0FBS2dCLFlBQ2QsRUNsRGEsTUFBTVcsRUFDbkIvQixXQUFBQSxDQUFXZ0MsR0FBb0IsSUFBbkIsY0FBRUMsR0FBZUQsRUFDM0I1QixLQUFLOEIsY0FBZ0JYLFNBQVNDLGNBQWNTLEVBQzlDLENBRUFFLElBQUFBLEdBQ0UvQixLQUFLOEIsY0FBY2hCLFVBQVVrQixJQUFJLGdCQUNqQ2IsU0FBU1YsaUJBQWlCLFVBQVdULEtBQUtpQyxnQkFDNUMsQ0FFQUMsS0FBQUEsR0FDRWxDLEtBQUs4QixjQUFjaEIsVUFBVUcsT0FBTyxnQkFDcENFLFNBQVNnQixvQkFBb0IsVUFBV25DLEtBQUtpQyxnQkFDL0MsQ0FFQUEsZ0JBQW1CRyxJQUNELFdBQVpBLEVBQUlDLEtBQ05yQyxLQUFLa0MsT0FDUCxFQUdGSSxvQkFBdUJGLEtBRW5CQSxFQUFJRyxTQUFXSCxFQUFJSSxlQUNuQkosRUFBSUcsT0FBT3pCLFVBQVUyQixTQUFTLGtCQUU5QnpDLEtBQUtrQyxPQUNQLEVBR0ZRLGlCQUFBQSxHQUNFMUMsS0FBSzhCLGNBQWNyQixpQkFBaUIsWUFBYVQsS0FBS3NDLG9CQUN4RCxFQzlCYSxNQUFNSyxVQUFzQmhCLEVBQ3pDL0IsV0FBQUEsQ0FBWWlDLEVBQWVlLEdBQ3pCQyxNQUFNLENBQUVoQixrQkFDUjdCLEtBQUs4QyxrQkFBb0JGLEVBQ3pCNUMsS0FBSytDLFdBQWEvQyxLQUFLOEIsY0FBY1YsY0FBYyxnQkFDbkRwQixLQUFLZ0QsYUFDSGhELEtBQUs4QixjQUFjbUIsaUJBQWlCLHFCQUN4QyxDQUVBQyxlQUFBQSxHQUNFLE1BQU1DLEVBQWlCLENBQUMsRUFJeEIsT0FIQW5ELEtBQUtnRCxhQUFhSSxTQUFTQyxJQUN6QkYsRUFBZUUsRUFBTW5ELE1BQVFtRCxFQUFNQyxLQUFLLElBRW5DSCxDQUNULENBRUFULGlCQUFBQSxHQUNFRyxNQUFNSCxvQkFDTjFDLEtBQUs4QixjQUFjckIsaUJBQWlCLFVBQVcyQixJQUM3Q0EsRUFBSW1CLGlCQUNKdkQsS0FBSzhDLGtCQUFrQjlDLEtBQUtrRCxrQkFBa0IsR0FFbEQsQ0FDQWhCLEtBQUFBLEdBQ0VXLE1BQU1YLFFBQ05sQyxLQUFLK0MsV0FBV1MsT0FDbEIsRUM3QkssTUFpQ01DLEVBQWlCdEMsU0FBU0MsY0FBYyx5QkFDeENzQyxFQUFvQnZDLFNBQVNDLGNBQWMsd0JBQzNDdUMsRUFBMEJ4QyxTQUFTQyxjQUM5Qyw4QkFJV3dDLEVBQWdCekMsU0FBU0MsY0FBYyx3QkFDdkN5QyxFQUFrQjFDLFNBQVNDLGNBQWMsZ0JDdkJoRDBDLEVBQVUsSUNsQkQsTUFDYmxFLFdBQUFBLENBQVdnQyxFQUFzQm1DLEdBQVUsSUFBL0IsTUFBRUMsRUFBSyxTQUFFQyxHQUFVckMsRUFDN0I1QixLQUFLa0UsT0FBU0YsRUFDZGhFLEtBQUttRSxVQUFZRixFQUNqQmpFLEtBQUtvRSxVQUFZTCxDQUNuQixDQUVBTSxXQUFBQSxHQUNFckUsS0FBS2tFLE9BQU9kLFNBQVNrQixJQUNuQnRFLEtBQUttRSxVQUFVRyxFQUFLLEdBRXhCLENBRUFDLE9BQUFBLENBQVFDLEdBQ054RSxLQUFLb0UsVUFBVUssUUFBUUQsRUFDekIsR0RJQSxDQUNFUixNRHBCd0IsQ0FDMUIsQ0FDRTlELEtBQU0sa0JBQ05FLEtBQU0sc0dBR1IsQ0FDRUYsS0FBTSxjQUNORSxLQUFNLHlHQUdSLENBQ0VGLEtBQU0saUJBQ05FLEtBQU0sNEdBR1IsQ0FDRUYsS0FBTSxVQUNORSxLQUFNLHFHQUdSLENBQ0VGLEtBQU0sd0JBQ05FLEtBQU0scUdBR1IsQ0FDRUYsS0FBTSxpQkFDTkUsS0FBTSxtR0NQTjZELFNBQVdwRSxJQUNULE1BQU0yRSxFQUFjRSxFQUFXN0UsR0FDL0JpRSxFQUFRUyxRQUFRQyxFQUFZLEdBR2hDWCxHQUdGQyxFQUFRTyxjQUdSLE1BQU1NLEVBQVcsSUVoQ0YsTUFDYi9FLFdBQUFBLENBQVdnQyxHQUFnQyxJQUEvQixhQUFFZ0QsRUFBWSxZQUFFQyxHQUFhakQsRUFDdkM1QixLQUFLOEUsYUFBZTNELFNBQVNDLGNBQWN3RCxHQUMzQzVFLEtBQUsrRSxZQUFjNUQsU0FBU0MsY0FBY3lELEVBQzVDLENBRUFHLFdBQUFBLEdBQ0UsTUFBTyxDQUNMQyxTQUFVakYsS0FBSzhFLGFBQWF0RCxZQUM1QjBELFFBQVNsRixLQUFLK0UsWUFBWXZELFlBRTlCLENBRUEyRCxXQUFBQSxDQUFZQyxHQUNWcEYsS0FBSzhFLGFBQWF0RCxZQUFjNEQsRUFBU0MsTUFDekNyRixLQUFLK0UsWUFBWXZELFlBQWM0RCxFQUFTRSxXQUMxQyxHRmdCNEIsQ0FDNUJWLGFBQWMsa0JBQ2RDLFlBQWEsMEJBR1RVLEVBQW1CLElBQUk1QyxFQUMzQixlQTBCRixTQUFpQzZDLEdBQy9CYixFQUFTUSxZQUFZSyxHQUNyQkQsRUFBaUJyRCxPQUNuQixJQTFCQXFELEVBQWlCN0Msb0JBR2pCLE1BQU0rQyxFQUFlLElBQUk5QyxFQUFjLGNBeUJ2QyxTQUE2QjZDLEdBQzNCLE1BQU0sS0FBRXRGLEVBQUksS0FBRUUsR0FBU29GLEVBQ2pCRSxFQUFZaEIsRUFBVyxDQUFFeEUsT0FBTUUsU0FDckMwRCxFQUFRUyxRQUFRbUIsR0FDaEJELEVBQWF2RCxPQUNmLElBN0JBdUQsRUFBYS9DLG9CQUViLE1BQU1pRCxFQUFtQixJRzdDVixjQUE2QmhFLEVBQzFDL0IsV0FBQUEsQ0FBWWlDLEdBQ1ZnQixNQUFNLENBQUVoQixrQkFFUjdCLEtBQUs0RixZQUFjNUYsS0FBSzhCLGNBQWNWLGNBQ3BDLHlCQUVGcEIsS0FBSzZGLGlCQUFtQjdGLEtBQUs4QixjQUFjVixjQUN6QyxzQkFFSixDQUVBVyxJQUFBQSxDQUFLbEMsR0FDSEcsS0FBSzRGLFlBQVluRSxJQUFNNUIsRUFBS08sS0FDNUJKLEtBQUs0RixZQUFZbEUsSUFBTTdCLEVBQUtLLEtBQzVCRixLQUFLNkYsaUJBQWlCckUsWUFBYzNCLEVBQUtLLEtBQ3pDMkMsTUFBTWQsTUFDUixHSDRCMEMsa0JBNkI1QyxTQUFTMkMsRUFBVzdFLEdBRWxCLE9BRG9CLElBQUlGLEVBQUtFLEVBQU0saUJBQWtCRSxHQUNsQ21CLGNBQ3JCLENBRUEsU0FBU25CLEVBQWdCRixHQUN2QjhGLEVBQWlCNUQsS0FBS2xDLEVBQ3hCLENBbkNBOEYsRUFBaUJqRCxvQkFzQ2pCZSxFQUFlaEQsaUJBQWlCLFNBbkNoQyxXQUNFLE1BQU0yRSxFQUFXVCxFQUFTSyxjQUMxQnRCLEVBQWtCSixNQUFROEIsRUFBU0gsU0FDbkN0QixFQUF3QkwsTUFBUThCLEVBQVNGLFFBQ3pDWSxFQUFlLGdCQUFnQkMsa0JBQy9CUixFQUFpQnhELE1BQ25CLElBOEJBNkIsRUFBY25ELGlCQUFpQixTQTVCL0IsV0FDRXFGLEVBQWUsYUFBYUMsa0JBQzVCTixFQUFhMUQsTUFDZixJQTRCQSxNQUFNK0QsRUFBaUIsQ0FBQyxFQUVFRSxRRGhESixDQUNwQkMsYUFBYyxlQUNkQyxjQUFlLHFCQUNmQyxxQkFBc0Isc0JBQ3RCQyxvQkFBcUIsOEJBQ3JCQyxnQkFBaUIsK0JBQ2pCQyxXQUFZLHdCQzJDS0MsTUFBTUMsS0FBS3JGLFNBQVM4QixpQkFBaUIrQyxFQUFPQyxlQUNwRDdDLFNBQVNxRCxJQUNoQixNQUFNQyxFQUFZLElJL0Z0QixNQUNFOUcsV0FBQUEsQ0FBWW9HLEVBQVFTLEdBQ2xCekcsS0FBSzJHLGVBQWlCWCxFQUFPRSxjQUM3QmxHLEtBQUs0RyxzQkFBd0JaLEVBQU9HLHFCQUNwQ25HLEtBQUs2RyxxQkFBdUJiLEVBQU9JLG9CQUNuQ3BHLEtBQUs4RyxpQkFBbUJkLEVBQU9LLGdCQUMvQnJHLEtBQUsrRyxZQUFjZixFQUFPTSxXQUUxQnRHLEtBQUtnSCxhQUFlUCxFQUVwQnpHLEtBQUtpSCxXQUFhVixNQUFNQyxLQUN0QnhHLEtBQUtnSCxhQUFhL0QsaUJBQWlCakQsS0FBSzJHLGlCQUcxQzNHLEtBQUtrSCxjQUFnQmxILEtBQUtnSCxhQUFhNUYsY0FDckNwQixLQUFLNEcsc0JBRVQsQ0FFQU8sZUFBQUEsQ0FBZ0JDLEdBQ2QsTUFBTUMsRUFBZXJILEtBQUtnSCxhQUFhNUYsY0FDcEMsSUFBR2dHLEVBQWFFLFlBRW5CRixFQUFhdEcsVUFBVWtCLElBQUloQyxLQUFLOEcsa0JBQ2hDTyxFQUFhN0YsWUFBYzRGLEVBQWFHLGtCQUN4Q0YsRUFBYXZHLFVBQVVrQixJQUFJaEMsS0FBSytHLFlBQ2xDLENBRUFTLGVBQUFBLENBQWdCSixHQUNkLE1BQU1DLEVBQWVySCxLQUFLZ0gsYUFBYTVGLGNBQ3BDLElBQUdnRyxFQUFhRSxZQUVuQkYsRUFBYXRHLFVBQVVHLE9BQU9qQixLQUFLOEcsa0JBQ25DTyxFQUFhdkcsVUFBVUcsT0FBT2pCLEtBQUsrRyxhQUNuQ00sRUFBYTdGLFlBQWMsRUFDN0IsQ0FFQWlHLG1CQUFBQSxDQUFvQkwsR0FDYkEsRUFBYU0sU0FBU0MsTUFHekIzSCxLQUFLd0gsZ0JBQWdCSixHQUZyQnBILEtBQUttSCxnQkFBZ0JDLEVBSXpCLENBRUFRLGdCQUFBQSxHQUNFLE9BQU81SCxLQUFLaUgsV0FBV1ksTUFBTVQsSUFBa0JBLEVBQWFNLFNBQVNDLE9BQ3ZFLENBRUFHLGlCQUFBQSxHQUNFOUgsS0FBS2tILGNBQWNwRyxVQUFVa0IsSUFBSWhDLEtBQUs2RyxzQkFDdEM3RyxLQUFLa0gsY0FBY2EsVUFBVyxDQUNoQyxDQUVBQyxrQkFBQUEsR0FDRWhJLEtBQUtrSCxjQUFjcEcsVUFBVUcsT0FBT2pCLEtBQUs2RyxzQkFDekM3RyxLQUFLa0gsY0FBY2EsVUFBVyxDQUNoQyxDQUVBRSxrQkFBQUEsR0FDTWpJLEtBQUs0SCxtQkFDUDVILEtBQUs4SCxvQkFFTDlILEtBQUtnSSxvQkFFVCxDQUVBakMsZUFBQUEsR0FDRS9GLEtBQUtpSSxxQkFFTGpJLEtBQUtpSCxXQUFXN0QsU0FBU2dFLElBQ3ZCcEgsS0FBS3dILGdCQUFnQkosRUFBYSxHQUV0QyxDQUVBN0csa0JBQUFBLEdBQ0VQLEtBQUtpSCxXQUFXN0QsU0FBU2dFLElBQ3ZCQSxFQUFhM0csaUJBQWlCLFNBQVMsS0FDckNULEtBQUt5SCxvQkFBb0JMLEdBQ3pCcEgsS0FBS2lJLG9CQUFvQixHQUN6QixHQUVOLENBRUFDLGdCQUFBQSxHQUNFbEksS0FBS2dILGFBQWF2RyxpQkFBaUIsVUFBVzJCLElBQzVDQSxFQUFJbUIsZ0JBQWdCLElBRXRCdkQsS0FBS08sb0JBQ1AsR0pNc0N5RixFQUFRUyxHQUV0QzBCLEVBQVcxQixFQUFZMkIsYUFBYSxRQUUxQ3RDLEVBQWVxQyxHQUFZekIsRUFDM0JBLEVBQVV3QixrQkFBa0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIGNhcmRTZWxlY3RvciwgaGFuZGxlQ2FyZENsaWNrKSB7XG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlTGlrZUJ0bigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVCdG4oKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NhcmRJbWFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh7IG5hbWU6IHRoaXMuX25hbWUsIGxpbms6IHRoaXMuX2xpbmsgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlTGlrZUJ0bigpIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gIH1cblxuICBfaGFuZGxlRGVsZXRlQnRuKCkge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpO1xuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jYXJkX19kZWxldGUtYnV0dG9uXCJcbiAgICApO1xuXG4gICAgdGhpcy5fY2FyZEltYWdlRWxlbWVudCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gICAgdGhpcy5fY2FyZFRpdGxlRWxlbWVudCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIik7XG4gICAgdGhpcy5fY2FyZFRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XG4gICAgdGhpcy5fY2FyZEltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2NhcmRJbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5fbGluaztcblxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcy5fY2FyZEVsZW1lbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UgPSAoZXZ0KSA9PiB7XG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgX2Nsb3NlT25SZW1vdGVDbGljayA9IChldnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBldnQudGFyZ2V0ID09PSBldnQuY3VycmVudFRhcmdldCB8fFxuICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fY2xvc2VcIilcbiAgICApIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5fY2xvc2VPblJlbW90ZUNsaWNrKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQpIHtcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gICAgdGhpcy5fcG9wdXBGb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG4gICAgdGhpcy5faW5wdXRWYWx1ZXMgPVxuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2Zvcm0taW5wdXRcIik7XG4gIH1cblxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgY29uc3QgZm9ybUlucHV0VmFsdWUgPSB7fTtcbiAgICB0aGlzLl9pbnB1dFZhbHVlcy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgZm9ybUlucHV0VmFsdWVbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybUlucHV0VmFsdWU7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICB9KTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX3BvcHVwRm9ybS5yZXNldCgpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QveW9zZW1pdGUuanBnXCIsXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYXRlbWFyLmpwZ1wiLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC92YW5vaXNlLmpwZ1wiLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xhZ28uanBnXCIsXG4gIH0sXG5dO1xuXG4vL1Byb2ZpbGUgVmFyaWFibGVzXG5leHBvcnQgY29uc3QgcHJvZmlsZUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLXRpdGxlLWlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjcHJvZmlsZS1kZXNjcmlwdGlvbi1pbnB1dFwiXG4pO1xuXG4vL0FkZCBDYXJkIFZhcmlhYmxlc1xuZXhwb3J0IGNvbnN0IGFkZE5ld0NhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5leHBvcnQgY29uc3QgY2FyZExpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcblxuLy8gVmFsaWRhdGlvbiBDb25maWdcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2Zvcm0taW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19mb3JtLWJ1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2Zvcm0taW5wdXRfdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCIsXG59O1xuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuaW1wb3J0IHtcbiAgaW5pdGlhbENhcmRzLFxuICBwcm9maWxlRWRpdEJ0bixcbiAgcHJvZmlsZVRpdGxlSW5wdXQsXG4gIHByb2ZpbGVEZXNjcmlwdGlvbklucHV0LFxuICBhZGROZXdDYXJkQnRuLFxuICBjYXJkTGlzdEVsZW1lbnQsXG4gIGNvbmZpZyxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG4vL0NhcmQgU2VjdGlvblxuY29uc3Qgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxuICB7XG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY3JlYXRlQ2FyZChkYXRhKTtcbiAgICAgIHNlY3Rpb24uYWRkSXRlbShjYXJkRWxlbWVudCk7XG4gICAgfSxcbiAgfSxcbiAgY2FyZExpc3RFbGVtZW50XG4pO1xuXG5zZWN0aW9uLnJlbmRlckl0ZW1zKCk7XG5cbi8vUHJvZmlsZSBGb3JtXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIG5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fdGl0bGVcIixcbiAgam9iU2VsZWN0b3I6IFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIsXG59KTtcblxuY29uc3QgcHJvZmlsZUVkaXRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxuICBcIiNlZGl0LW1vZGFsXCIsXG4gIGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0XG4pO1xucHJvZmlsZUVkaXRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vL0FkZCBDYXJkIEZvcm1cbmNvbnN0IGFkZENhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiI2FkZC1tb2RhbFwiLCBoYW5kbGVOZXdDYXJkU3VibWl0KTtcbmFkZENhcmRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5jb25zdCBjYXJkUHJldmlld1BvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiI3ByZXZpZXctbW9kYWxcIik7XG5jYXJkUHJldmlld1BvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vRnVuY3Rpb25zXG5mdW5jdGlvbiBvcGVuRWRpdFByb2ZpbGVGb3JtKCkge1xuICBjb25zdCB1c2VyRGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIHByb2ZpbGVUaXRsZUlucHV0LnZhbHVlID0gdXNlckRhdGEudXNlck5hbWU7XG4gIHByb2ZpbGVEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdXNlckRhdGEudXNlckpvYjtcbiAgZm9ybVZhbGlkYXRvcnNbXCJwcm9maWxlLWZvcm1cIl0ucmVzZXRWYWxpZGF0aW9uKCk7XG4gIHByb2ZpbGVFZGl0UG9wdXAub3BlbigpO1xufVxuXG5mdW5jdGlvbiBvcGVuQWRkTmV3Q2FyZE1vZGFsKCkge1xuICBmb3JtVmFsaWRhdG9yc1tcImNhcmQtZm9ybVwiXS5yZXNldFZhbGlkYXRpb24oKTtcbiAgYWRkQ2FyZFBvcHVwLm9wZW4oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXQoaW5wdXRWYWx1ZXMpIHtcbiAgdXNlckluZm8uc2V0VXNlckluZm8oaW5wdXRWYWx1ZXMpO1xuICBwcm9maWxlRWRpdFBvcHVwLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU5ld0NhcmRTdWJtaXQoaW5wdXRWYWx1ZXMpIHtcbiAgY29uc3QgeyBuYW1lLCBsaW5rIH0gPSBpbnB1dFZhbHVlcztcbiAgY29uc3QgbmV3Q2FyZEVsID0gY3JlYXRlQ2FyZCh7IG5hbWUsIGxpbmsgfSk7XG4gIHNlY3Rpb24uYWRkSXRlbShuZXdDYXJkRWwpO1xuICBhZGRDYXJkUG9wdXAuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhKSB7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3IENhcmQoZGF0YSwgXCIjY2FyZC10ZW1wbGF0ZVwiLCBoYW5kbGVDYXJkQ2xpY2spO1xuICByZXR1cm4gY2FyZEVsZW1lbnQuZ2VuZXJhdGVDYXJkKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNhcmRDbGljayhkYXRhKSB7XG4gIGNhcmRQcmV2aWV3UG9wdXAub3BlbihkYXRhKTtcbn1cblxuLy9FdmVudCBMaXN0ZW5lcnNcbnByb2ZpbGVFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRWRpdFByb2ZpbGVGb3JtKTtcbmFkZE5ld0NhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5BZGROZXdDYXJkTW9kYWwpO1xuXG4vL0Zvcm0gVmFsaWRhdGlvblxuY29uc3QgZm9ybVZhbGlkYXRvcnMgPSB7fTtcblxuY29uc3QgZW5hYmxlVmFsaWRhdGlvbiA9IChjb25maWcpID0+IHtcbiAgY29uc3QgZm9ybUxpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmZvcm1TZWxlY3RvcikpO1xuICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgZm9ybUVsZW1lbnQpO1xuXG4gICAgY29uc3QgZm9ybU5hbWUgPSBmb3JtRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xuXG4gICAgZm9ybVZhbGlkYXRvcnNbZm9ybU5hbWVdID0gdmFsaWRhdG9yO1xuICAgIHZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG4gIH0pO1xufTtcblxuZW5hYmxlVmFsaWRhdGlvbihjb25maWcpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIHNlbGVjdG9yKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XG4gIH1cblxuICByZW5kZXJJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oY2FyZEVsZW1lbnQpIHtcbiAgICB0aGlzLl9zZWxlY3Rvci5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3Rvciwgam9iU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX25hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xuICAgIHRoaXMuX2pvYkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpvYlNlbGVjdG9yKTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyTmFtZTogdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQsXG4gICAgICB1c2VySm9iOiB0aGlzLl9qb2JFbGVtZW50LnRleHRDb250ZW50LFxuICAgIH07XG4gIH1cblxuICBzZXRVc2VySW5mbyh1c2VyRGF0YSkge1xuICAgIHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50ID0gdXNlckRhdGEudGl0bGU7XG4gICAgdGhpcy5fam9iRWxlbWVudC50ZXh0Q29udGVudCA9IHVzZXJEYXRhLmRlc2NyaXB0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XG5cbiAgICB0aGlzLl9pbWdQcmV2aWV3ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5tb2RhbF9faW1hZ2UtcHJldmlld1wiXG4gICAgKTtcbiAgICB0aGlzLl9pbWdQcmV2aWV3VGl0bGUgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLm1vZGFsX19pbWFnZS10aXRsZVwiXG4gICAgKTtcbiAgfVxuXG4gIG9wZW4oZGF0YSkge1xuICAgIHRoaXMuX2ltZ1ByZXZpZXcuc3JjID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX2ltZ1ByZXZpZXcuYWx0ID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuX2ltZ1ByZXZpZXdUaXRsZS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBjb25maWcuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWcuZXJyb3JDbGFzcztcblxuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG5cbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG5cbiAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3JcbiAgICApO1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIGVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCk7XG4gIH1cblxuICBfZGlzYWJsZVN1Ym1pdEJ0bigpIHtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgX2FjdGl2YXRlU3VibWl0QnRuKCkge1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZVN1Ym1pdEJ0bigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZVN1Ym1pdEJ0bigpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xuXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XG4iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImNhcmRTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsInRoaXMiLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9saWtlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVMaWtlQnRuIiwiX2RlbGV0ZUJ1dHRvbiIsIl9oYW5kbGVEZWxldGVCdG4iLCJfY2FyZEltYWdlRWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9jYXJkRWxlbWVudCIsInJlbW92ZSIsImdlbmVyYXRlQ2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfY2FyZFRpdGxlRWxlbWVudCIsInRleHRDb250ZW50Iiwic3JjIiwiYWx0IiwiUG9wdXAiLCJfcmVmIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJvcGVuIiwiYWRkIiwiX2hhbmRsZUVzY0Nsb3NlIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5IiwiX2Nsb3NlT25SZW1vdGVDbGljayIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjb250YWlucyIsInNldEV2ZW50TGlzdGVuZXJzIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX3BvcHVwRm9ybSIsIl9pbnB1dFZhbHVlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJmb3JtSW5wdXRWYWx1ZSIsImZvckVhY2giLCJpbnB1dCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJyZXNldCIsInByb2ZpbGVFZGl0QnRuIiwicHJvZmlsZVRpdGxlSW5wdXQiLCJwcm9maWxlRGVzY3JpcHRpb25JbnB1dCIsImFkZE5ld0NhcmRCdG4iLCJjYXJkTGlzdEVsZW1lbnQiLCJzZWN0aW9uIiwic2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX3NlbGVjdG9yIiwicmVuZGVySXRlbXMiLCJpdGVtIiwiYWRkSXRlbSIsImNhcmRFbGVtZW50IiwicHJlcGVuZCIsImNyZWF0ZUNhcmQiLCJ1c2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwiX25hbWVFbGVtZW50IiwiX2pvYkVsZW1lbnQiLCJnZXRVc2VySW5mbyIsInVzZXJOYW1lIiwidXNlckpvYiIsInNldFVzZXJJbmZvIiwidXNlckRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvZmlsZUVkaXRQb3B1cCIsImlucHV0VmFsdWVzIiwiYWRkQ2FyZFBvcHVwIiwibmV3Q2FyZEVsIiwiY2FyZFByZXZpZXdQb3B1cCIsIl9pbWdQcmV2aWV3IiwiX2ltZ1ByZXZpZXdUaXRsZSIsImZvcm1WYWxpZGF0b3JzIiwicmVzZXRWYWxpZGF0aW9uIiwiY29uZmlnIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJBcnJheSIsImZyb20iLCJmb3JtRWxlbWVudCIsInZhbGlkYXRvciIsIl9pbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRMaXN0IiwiX3N1Ym1pdEJ1dHRvbiIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJzb21lIiwiX2Rpc2FibGVTdWJtaXRCdG4iLCJkaXNhYmxlZCIsIl9hY3RpdmF0ZVN1Ym1pdEJ0biIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImVuYWJsZVZhbGlkYXRpb24iLCJmb3JtTmFtZSIsImdldEF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=
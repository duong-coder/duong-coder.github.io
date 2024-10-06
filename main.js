(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "++6F":
/*!*****************************************!*\
  !*** ./src/app/service/post.service.ts ***!
  \*****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date.service */ "a8YB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _jwttoken_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwttoken.service */ "Cpxq");






class PostService {
    constructor(dateService, http, jwttokenService) {
        this.dateService = dateService;
        this.http = http;
        this.jwttokenService = jwttokenService;
        this.URL_GET_ALL_POST = '/post/all/duongnh';
        // private URL_GET_ALL_POST: string = environment.apiUrl + '/account/0773314448';
        this.URL_GET_POST_BY_ID = '/post/';
        this.URL_INSERT_PUT_POST = '/post';
        this.URL_DELETE_POST_BY_ID = '/post/';
    }
    getAllPost() {
        console.log('GET_ALL_POST');
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.URL_GET_ALL_POST);
    }
    getPostById(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.URL_GET_POST_BY_ID + id);
    }
    addPost(post) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.URL_INSERT_PUT_POST, post);
    }
    updatePost(post) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.URL_INSERT_PUT_POST, post);
    }
    deletePost(id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.URL_DELETE_POST_BY_ID + id);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_jwttoken_service__WEBPACK_IMPORTED_MODULE_4__["JwttokenService"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _jwttoken_service__WEBPACK_IMPORTED_MODULE_4__["JwttokenService"] }]; }, null); })();


/***/ }),

/***/ "/Y5S":
/*!************************************************************************!*\
  !*** ./src/app/modules/profile/profile-edit/profile-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_common_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/star-rating/star-rating.component */ "0qIY");
/* harmony import */ var src_app_model_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/account */ "gGTi");
/* harmony import */ var src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/account-firebase.service */ "A2T0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/modal.service */ "CE6K");
/* harmony import */ var src_app_service_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/form.service */ "9F8z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../profile-content/profile-content.component */ "8umm");
/* harmony import */ var _profile_timeline_edit_profile_timeline_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile-timeline-edit/profile-timeline-edit.component */ "S5Yh");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _skill_edit_skill_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skill-edit/skill-edit.component */ "SHcG");
















class ProfileEditComponent {
    // skills: Skill[];
    constructor(
    // private acccountService: AccountService,
    acccountFirebaseService, fb, modalService, formService, router) {
        this.acccountFirebaseService = acccountFirebaseService;
        this.fb = fb;
        this.modalService = modalService;
        this.formService = formService;
        this.router = router;
        this.skillFormGroupRating = this.formService.createSkillFormGroup(undefined);
        this.account = new src_app_model_account__WEBPACK_IMPORTED_MODULE_4__["Account"]();
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCalendarAlt"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPhone"];
        this.faMail = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"];
        this.faAddress = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMapMarkedAlt"];
        this.profileContents = [
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBullseye"], title: 'Objective' },
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLightbulb"], title: 'Education' },
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUsers"], title: 'Work Experience' },
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAward"], title: 'Honors & Awards' },
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPen"], title: 'Additional Information' },
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBookmark"], title: 'References' },
            { hasIcon: false, icon: undefined, title: 'Skills' },
            { hasIcon: false, icon: undefined, title: 'INTERESTS' }
        ];
        this.profileForm = this.formService.createAccountFormGroup();
    }
    ngOnInit() {
        this.getProfile();
    }
    ngOnChanges() {
        // this.mapDataToForm();
    }
    getProfile() {
        // this.acccountService.getAccountByPhone().subscribe({
        //   next: (res) => {
        //     if (res.status === 200) {
        //       this.account = { ...res.body };
        //       // this.skillRating = this.account.skillDTOs[0];
        //       console.log('response', this.account);
        //       this.mapDataToForm();
        //     }
        //   },
        //   error: (error) => {
        //     console.error(error);
        //   },
        //   complete: () => {
        //     console.log('Complete get profile');
        //   }
        // });
        this.acccountFirebaseService.getAccountByUsername().subscribe({
            next: (res) => {
                if (res && res != null) {
                    this.account = Object.assign({}, res);
                    // this.skillRating = this.account.skillDTOs[0];
                    console.log('response', this.account);
                    this.mapDataToForm();
                }
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log('Complete get profile');
            }
        });
    }
    mapDataToForm() {
        const listEduForm = this.fb.array([]);
        const listWEForm = this.fb.array([]);
        const listSkillForm = this.fb.array([]);
        this.account.educationDTOs.forEach(edu => {
            const eduForm = this.formService.createEducationFormGroup(edu);
            listEduForm.push(eduForm);
        });
        this.account.workExperienceDTOs.forEach(we => {
            const weForm = this.formService.createWorkExperienceFormGroup(we);
            listWEForm.push(weForm);
        });
        this.account.skillDTOs.forEach(s => {
            const skillForm = this.formService.createSkillFormGroup(s);
            listSkillForm.push(skillForm);
        });
        this.skillFormGroupRating = listSkillForm.at(0);
        this.profileForm = this.formService.createAccountFormGroupWithData(this.account, listSkillForm, listEduForm, listWEForm);
    }
    getPercentSkill() {
    }
    openSkillRatingModal(skillFormGroup) {
        this.skillFormGroupRating = skillFormGroup;
        // const ele = document.getElementsByTagName('app-star-rating').item(0);
        // const eleRef = new ElementRef<Element>(ele);
        // const modal = new StarRatingComponent(eleRef, this.modalService);
        const modal = this.starRatingComponent;
        this.modalService.set(modal, false);
        console.log('OPEN MODAL', skillFormGroup);
    }
    getSkillRating(skillFormGroup) {
        // const skillDTOs = this.account.skillDTOs;
        // let skill: Skill;
        // if (skillDTOs != null && skillDTOs !== undefined) {
        //   skill = skillDTOs.find(s => {
        //     return s.skill === skillFormGroup.get('skill').value;
        //   });
        //   skill.level = skillFormGroup.level;
        // }
        console.log('SKILL FORM GROUP RATING: ', skillFormGroup);
    }
    update() {
        const accountAfterUpdate = this.profileForm.getRawValue();
        // accountAfterUpdate.skillDTOs = this.account.skillDTOs;
        accountAfterUpdate.gender = accountAfterUpdate.gender === 'Female';
        accountAfterUpdate.password = this.account.password;
        accountAfterUpdate.role = this.account.role;
        accountAfterUpdate.username = this.account.username;
        accountAfterUpdate.dateCreate = this.account.dateCreate.toISOString();
        console.log('post in serve', accountAfterUpdate);
        // this.acccountService.updateByUsername(accountAfterUpdate).subscribe({
        //   next: (res) => {
        //     console.log('RESPONSE UPDATE: ', res);
        //     this.router.navigateByUrl('/duongnh/about');
        //   },
        //   error: (error) => {
        //     console.error('RESPONSE UPDATE: ', error);
        //   },
        //   complete: () => {
        //     console.log('RESPONSE UPDATE: COMPLETE');
        //   }
        // });
        this.acccountFirebaseService.updateByUsername(accountAfterUpdate).subscribe({
            next: (res) => {
                console.log('RESPONSE UPDATE: ', res);
                this.router.navigateByUrl('/duongnh/about');
            },
            error: (error) => {
                console.error('RESPONSE UPDATE: ', error);
            },
            complete: () => {
                console.log('RESPONSE UPDATE: COMPLETE');
            }
        });
    }
    resizeInput(element) {
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px';
    }
}
ProfileEditComponent.ɵfac = function ProfileEditComponent_Factory(t) { return new (t || ProfileEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_5__["AccountFirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_form_service__WEBPACK_IMPORTED_MODULE_8__["FormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
ProfileEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileEditComponent, selectors: [["app-profile-edit"]], viewQuery: function ProfileEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_common_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_3__["StarRatingComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.starRatingComponent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 74, vars: 38, consts: [[3, "formGroup"], [1, "body-profile", "font-style"], [1, "title"], ["type", "text", "formControlName", "fullname", "placeholder", "Fullname", 1, "__text", "edit-right"], [1, "profile-container"], [1, "contents"], [1, "__item"], [3, "hasIcon", "icon", "title"], ["type", "text", "rows", "2", "cols", "30", "formControlName", "objective", "placeholder", "Objective", 1, "edit-left", 3, "keyup"], ["objectiveTmp", ""], [3, "listEducationForm"], [3, "listWorkExperienceForm"], ["type", "text", "rows", "2", "cols", "30", "formControlName", "awards", "placeholder", "Award", 1, "edit-left", 3, "keyup"], ["awardTmp", ""], ["type", "text", "rows", "2", "cols", "30", "formControlName", "addInformation", "placeholder", "AddInformation", 1, "edit-left", 3, "keyup"], ["addInformationTmp", ""], ["type", "text", "rows", "2", "cols", "30", "formControlName", "references", "placeholder", "References", 1, "edit-left", 3, "keyup"], ["referenceaTmp", ""], [1, "sub-contents"], [1, "__about"], [2, "font-size", "18px", 3, "icon"], ["type", "date", "formControlName", "birthday", "placeholder", "Birthday", 1, "edit-right"], ["type", "text", "formControlName", "gender", "placeholder", "Gender", 1, "edit-right"], ["type", "text", "formControlName", "phonenumber", "placeholder", "Phonenumber", 1, "edit-right"], ["formControlName", "email", "placeholder", "Email", 1, "edit-right", 3, "keyup"], ["emailTmp", ""], ["formControlName", "facebook", "placeholder", "Facebook", 1, "edit-right", 3, "keyup"], ["facebookTmp", ""], ["formControlName", "github", "placeholder", "Github", 1, "edit-right", 3, "keyup"], ["githubTmp", ""], ["formControlName", "twitter", "placeholder", "Twitter", 1, "edit-right", 3, "keyup"], ["twitterTmp", ""], ["formControlName", "address", "placeholder", "Address", 1, "edit-right", 3, "keyup"], ["addressTmp", ""], [3, "listSkillForm", "openSkillRatingModal"], [1, "__favorites"], ["formControlName", "hobby", "rows", "2", "cols", "30", "placeholder", "Hobby", 1, "edit-right", 3, "keyup"], ["hobbyTmp", ""], [1, "buttons"], [1, "btn-post", 3, "click"], [3, "id", "skillFormGroup", "skillRating"]], template: function ProfileEditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-profile-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileEditComponent_Template_textarea_keyup_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.resizeInput(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-profile-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-profile-timeline-edit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-profile-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-profile-timeline-edit", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-profile-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileEditComponent_Template_textarea_keyup_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.resizeInput(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-profile-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "textarea", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileEditComponent_Template_textarea_keyup_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.resizeInput(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-profile-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "textarea", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileEditComponent_Template_textarea_keyup_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return ctx.resizeInput(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "textarea", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileEditComponent_Template_textarea_keyup_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43); return ctx.resizeInput(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "textarea", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileEditComponent_Template_textarea_keyup_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return ctx.resizeInput(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "textarea", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileEditComponent_Template_textarea_keyup_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); return ctx.resizeInput(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "textarea", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileEditComponent_Template_textarea_keyup_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55); return ctx.resizeInput(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "textarea", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileEditComponent_Template_textarea_keyup_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59); return ctx.resizeInput(_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-profile-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "app-skill-edit", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openSkillRatingModal", function ProfileEditComponent_Template_app_skill_edit_openSkillRatingModal_62_listener($event) { return ctx.openSkillRatingModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "app-profile-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "textarea", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileEditComponent_Template_textarea_keyup_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69); return ctx.resizeInput(_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileEditComponent_Template_button_click_71_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "UPDATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "app-star-rating", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("skillRating", function ProfileEditComponent_Template_app_star_rating_skillRating_73_listener($event) { return ctx.getSkillRating($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[0].hasIcon)("icon", ctx.profileContents[0].icon)("title", ctx.profileContents[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[1].hasIcon)("icon", ctx.profileContents[1].icon)("title", ctx.profileContents[1].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listEducationForm", ctx.profileForm.get("educationDTOs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[2].hasIcon)("icon", ctx.profileContents[2].icon)("title", ctx.profileContents[2].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listWorkExperienceForm", ctx.profileForm.get("workExperienceDTOs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[3].hasIcon)("icon", ctx.profileContents[3].icon)("title", ctx.profileContents[3].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[4].hasIcon)("icon", ctx.profileContents[4].icon)("title", ctx.profileContents[4].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[5].hasIcon)("icon", ctx.profileContents[5].icon)("title", ctx.profileContents[5].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCalendar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faMail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFacebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTwitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[6].hasIcon)("icon", ctx.profileContents[6].icon)("title", ctx.profileContents[6].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listSkillForm", ctx.profileForm.get("skillDTOs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[7].hasIcon)("icon", ctx.profileContents[7].icon)("title", ctx.profileContents[7].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.skillFormGroupRating.get("skill"))("skillFormGroup", ctx.skillFormGroupRating);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_10__["ProfileContentComponent"], _profile_timeline_edit_profile_timeline_edit_component__WEBPACK_IMPORTED_MODULE_11__["ProfileTimelineEditComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"], _skill_edit_skill_edit_component__WEBPACK_IMPORTED_MODULE_13__["SkillEditComponent"], src_app_common_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_3__["StarRatingComponent"]], styles: ["textarea[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  width: 100%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  background: none;\r\n  border: 1px solid #fcf8e0;\r\n  outline: none;\r\n  box-shadow: none;\r\n  font-family: robotocondensed,Arial,sans-serif;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  line-height: normal;\r\n  width: 100%;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  background: none;\r\n  outline: none;\r\n  box-shadow: none;\r\n  font-family: robotocondensed,Arial,sans-serif;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  background-color: #7c7a79;\r\n  padding: 20px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  border: 1px solid #7c7a79;\r\n}\r\n\r\n.__text[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    font-size: 42px;\r\n    font-weight: 700;\r\n    line-height: 46px;\r\n    border: 1px solid #7c7a79;\r\n}\r\n\r\n.edit-left[_ngcontent-%COMP%]{\r\n  color: #514f50;\r\n  margin: 0px;\r\n  padding: 5px;\r\n  height: 75px;\r\n  border: 1px solid #fcf8e0;\r\n}\r\n\r\n.contents[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .contents[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover{\r\n  border: 1px solid #514f50;\r\n}\r\n\r\n.contents[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contents[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{\r\n  border: 1px solid #514f50;\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.edit-right[_ngcontent-%COMP%]{\r\n  color: #fcf8e0;\r\n  margin: 0px;\r\n  padding: 5px;\r\n  border: 1px solid #514f50;\r\n}\r\n\r\n.sub-contents[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .sub-contents[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover, .title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .title[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\r\n  border: 1px solid #fcf8e0;\r\n}\r\n\r\n.sub-contents[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .sub-contents[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .title[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  border: 1px solid #fcf8e0;\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.__favorites[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n  border: 1px solid #414142;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n  padding: 20px 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw2Q0FBNkM7RUFDN0MseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsNkNBQTZDO0VBQzdDLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2ZpbGUvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRleHRhcmVhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmNmOGUwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBmb250LWZhbWlseTogcm9ib3RvY29uZGVuc2VkLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90b2NvbmRlbnNlZCxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuXHJcblxyXG4udGl0bGV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YzdhNzk7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4udGl0bGUgaW5wdXR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzdjN2E3OTtcclxufVxyXG4uX190ZXh0e1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YzdhNzk7XHJcbn1cclxuLmVkaXQtbGVmdHtcclxuICBjb2xvcjogIzUxNGY1MDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmY2Y4ZTA7XHJcbn1cclxuLmNvbnRlbnRzIGlucHV0OmhvdmVyLC5jb250ZW50cyB0ZXh0YXJlYTpob3ZlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTE0ZjUwO1xyXG59XHJcbi5jb250ZW50cyBpbnB1dDpmb2N1cywuY29udGVudHMgdGV4dGFyZWE6Zm9jdXN7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzUxNGY1MDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5lZGl0LXJpZ2h0e1xyXG4gIGNvbG9yOiAjZmNmOGUwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTE0ZjUwO1xyXG59XHJcbi5zdWItY29udGVudHMgaW5wdXQ6aG92ZXIsLnN1Yi1jb250ZW50cyB0ZXh0YXJlYTpob3ZlcixcclxuLnRpdGxlIGlucHV0OmhvdmVyLC50aXRsZSB0ZXh0YXJlYTpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZjZjhlMDtcclxufVxyXG5cclxuLnN1Yi1jb250ZW50cyBpbnB1dDpmb2N1cywuc3ViLWNvbnRlbnRzIHRleHRhcmVhOmZvY3VzLFxyXG4udGl0bGUgaW5wdXQ6Zm9jdXMsLnRpdGxlIHRleHRhcmVhOmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmNmOGUwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLl9fZmF2b3JpdGVzIHRleHRhcmVhe1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MTQxNDI7XHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */", ".body-profile[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0px 10%;\r\n    padding-top: 0px;\r\n    font-family: robotocondensed,Arial,sans-serif;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  background-color: #7c7a79;\r\n  padding: 20px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   .__text[_ngcontent-%COMP%]{\r\n  color: #fcf8e0;\r\n  margin: 0px;\r\n  padding: 5px;\r\n  width: 40%;\r\n  font-size: 42px;\r\n  font-weight: 700;\r\n  line-height: 46px;\r\n  \r\n  \r\n}\r\n\r\n.profile-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border: solid 1px #514f50;\r\n}\r\n\r\n.contents[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    flex-grow: 10;\r\n    background-color: #fcf8e0;\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n\r\n.sub-contents[_ngcontent-%COMP%] {\r\n    flex-grow: 2;\r\n    width: 200px;\r\n    padding: 20px 15px;\r\n    color: #fcf8e0 !important;\r\n    border-right: solid 1px #fcf8e0;\r\n    background-color: #414142;\r\n}\r\n\r\n.sub-contents[_ngcontent-%COMP%]   .__about[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #514f50;\r\n}\r\n\r\n.__about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 10px;\r\n}\r\n\r\n.__about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    \r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.__about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: smaller;\r\n    font-weight: normal;\r\n    margin-left: 10px;\r\n}\r\n\r\n.sub-contents[_ngcontent-%COMP%]   .__skilss[_ngcontent-%COMP%]   .__item[_ngcontent-%COMP%]{\r\n  padding: 2px 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.sub-contents[_ngcontent-%COMP%]   .__skilss[_ngcontent-%COMP%]   .__item[_ngcontent-%COMP%]   .__name[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\n    font-weight: normal;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 10px;\r\n    background-color: #6a6971;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .__skill[_ngcontent-%COMP%] {\r\n    height: 10px;\r\n    background-color: #fcf8e0;\r\n}\r\n\r\n.__favorites[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\n    font-weight: normal;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n  padding: 20px 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZGV0YWlsL3Byb2ZpbGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkNBQTZDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQiwrQkFBK0I7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUNBOzs7R0FHRzs7QUFFSDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUEsNkJBQTZCOztBQUU3QjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLWRldGFpbC9wcm9maWxlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHktcHJvZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMHB4IDEwJTtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvY29uZGVuc2VkLEFyaWFsLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2E3OTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi50aXRsZSAuX190ZXh0e1xyXG4gIGNvbG9yOiAjZmNmOGUwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogNDAlO1xyXG4gIGZvbnQtc2l6ZTogNDJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICM3YzdhNzk7ICovXHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzUxNGY1MDsgKi9cclxufVxyXG5cclxuLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNTE0ZjUwO1xyXG59XHJcblxyXG4uY29udGVudHMge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZsZXgtZ3JvdzogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUwO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4vKlxyXG4uY29udGVudHMgLl9faXRlbXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSAqL1xyXG5cclxuLnN1Yi1jb250ZW50cyB7XHJcbiAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZjZjhlMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2ZjZjhlMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDI7XHJcbn1cclxuXHJcbi5zdWItY29udGVudHMgLl9fYWJvdXQge1xyXG4gICAgLyogaGVpZ2h0OiAzMDBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTRmNTA7XHJcbn1cclxuXHJcbi5fX2Fib3V0IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uX19hYm91dCB1bCBsaSB7XHJcbiAgICAvKiBoZWlnaHQ6IDQwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLl9fYWJvdXQgdWwgbGkgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWItY29udGVudHMgLl9fc2tpbHNzIC5fX2l0ZW17XHJcbiAgcGFkZGluZzogMnB4IDBweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnN1Yi1jb250ZW50cyAuX19za2lsc3MgLl9faXRlbSAuX19uYW1le1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGZvciBza2lsbCBiYXJzICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhNjk3MTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuX19za2lsbCB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUwO1xyXG59XHJcblxyXG4uX19mYXZvcml0ZXN7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-edit',
                templateUrl: './profile-edit.component.html',
                styleUrls: ['./profile-edit.component.css', '../profile-detail/profile-detail.component.css']
            }]
    }], function () { return [{ type: src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_5__["AccountFirebaseService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }, { type: src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"] }, { type: src_app_service_form_service__WEBPACK_IMPORTED_MODULE_8__["FormService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, { starRatingComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_common_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_3__["StarRatingComponent"]]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\DuongNH\Project\Blog_Angular_SpringMVC\fontend\web\Blog-Dependency\src\main.ts */"zUnb");


/***/ }),

/***/ "0qIY":
/*!*************************************************************!*\
  !*** ./src/app/common/star-rating/star-rating.component.ts ***!
  \*************************************************************/
/*! exports provided: StarRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/modal.service */ "CE6K");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







function StarRatingComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function StarRatingComponent_span_5_Template_fa_icon_mousemove_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const level_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getSkillRating(level_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faStar);
} }
class StarRatingComponent {
    constructor(elementRef, modalService) {
        this.elementRef = elementRef;
        this.modalService = modalService;
        this.skillRating = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.levels = [1, 2, 3, 4, 5];
        this.element = elementRef.nativeElement;
    }
    ngOnInit() {
        // this.element.
        document.body.appendChild(this.element);
        this.element.addEventListener('click', el => {
            this.closeModal();
        });
        this.modalService.set(this, true);
    }
    ngOnChanges() {
        console.log('CHANGE MODAL');
        this.getSkillRating(this.skillFormGroup.get('level').value);
        // this.modalService.set(this, false);
    }
    openModal() {
        console.log('OPEN');
        this.element.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    closeModal() {
        console.log('CLOSE');
        this.element.style.display = 'none';
        document.body.style.overflow = 'visible';
    }
    getSkillRating(level) {
        this.skillFormGroup.get('level').setValue(level);
        this.skillRating.emit(this.skillFormGroup);
        const iconElements = this.element.getElementsByClassName('--icon');
        for (let i = 0; i < iconElements.length; i++) {
            iconElements.item(i).classList.remove('checked');
            for (let t = 0; t < level; t++) {
                iconElements.item(t).classList.add('checked');
            }
        }
    }
}
StarRatingComponent.ɵfac = function StarRatingComponent_Factory(t) { return new (t || StarRatingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
StarRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarRatingComponent, selectors: [["app-star-rating"]], inputs: { id: "id", skillFormGroup: "skillFormGroup" }, outputs: { skillRating: "skillRating" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 2, consts: [[1, "star-rating"], [1, "__body"], [1, "--title"], [1, "--icons"], [4, "ngFor", "ngForOf"], [1, "star-rating-background"], [1, "--icon", "--icon-big", "checked", 3, "icon", "mousemove"]], template: function StarRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StarRatingComponent_span_5_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.id.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.levels);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["app-star-rating[_ngcontent-%COMP%]{\r\n  transition: all 0.5s;\r\n}\r\n.star-rating[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  transition: all 0.5s;\r\n}\r\n.--title[_ngcontent-%COMP%]{\r\n  color: #fcf8e0;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  font-size: 36px;\r\n  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n}\r\n.__body[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n.star-rating-background[_ngcontent-%COMP%] {\r\n  \r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  \r\n  background-color: #000;\r\n  opacity: 0.75;\r\n  \r\n  z-index: 900;\r\n  transition: all 0.5s;\r\n}\r\n.star-rating__open[_ngcontent-%COMP%] {\r\n  display: block;\r\n  transition: all 0.5s;\r\n}\r\n.__body[_ngcontent-%COMP%]   .--icon-big[_ngcontent-%COMP%] {\r\n  font-size: xx-large;\r\n}\r\n.checked[_ngcontent-%COMP%] {\r\n  color: orange;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9FQUFvRTtBQUN0RTtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsK0RBQStEO0VBQy9ELFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc3Rhci1yYXRpbmd7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuLnN0YXItcmF0aW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuLi0tdGl0bGV7XHJcbiAgY29sb3I6ICNmY2Y4ZTA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5fX2JvZHkge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN0YXItcmF0aW5nLWJhY2tncm91bmQge1xyXG4gIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDAuNzU7XHJcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xyXG4gIHotaW5kZXg6IDkwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuLnN0YXItcmF0aW5nX19vcGVuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuLl9fYm9keSAuLS1pY29uLWJpZyB7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuLmNoZWNrZWQge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-star-rating',
                templateUrl: './star-rating.component.html',
                styleUrls: ['./star-rating.component.css'],
                providers: [src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_service_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], skillFormGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], skillRating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "0yTC":
/*!*******************************************!*\
  !*** ./src/app/model/account-firebase.ts ***!
  \*******************************************/
/*! exports provided: AccountFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFirebase", function() { return AccountFirebase; });
class AccountFirebase {
    constructor() { }
}


/***/ }),

/***/ "1+ss":
/*!***************************************************************************!*\
  !*** ./src/app/service/firebase-cloud-firestore/post-firebase.service.ts ***!
  \***************************************************************************/
/*! exports provided: PostFirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFirebaseService", function() { return PostFirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_model_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/post */ "S19W");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");







class PostFirebaseService {
    constructor(firestore, fireauth) {
        this.firestore = firestore;
        this.fireauth = fireauth;
        this.username = "duongnh";
        this.dbPostpath = "/posts";
        this.fireauth.onAuthStateChanged((user) => {
            if (user) {
                console.log(`user login ${user.displayName}`);
            }
            else {
            }
        });
        this.fireauth.credential.subscribe;
    }
    getAllPost() {
        const posts = this.firestore.collection(this.dbPostpath, ref => ref.where('username', '==', this.username)
            .orderBy('dateCreate', 'desc'));
        return posts.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => changes.map(c => {
            const post = Object.assign(Object.assign({}, c.payload.doc.data()), { id: c.payload.doc.id });
            return post;
        })));
    }
    getPostById(id) {
        const posts = this.firestore.collection(this.dbPostpath, ref => ref.where('username', '==', this.username)
            .where('id', '==', id));
        return posts.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => changes.map(c => {
            const post = Object.assign(Object.assign({}, c.payload.doc.data()), { id: c.payload.doc.id });
            return post;
        })[0]));
    }
    addPost(post) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.firestore.collection(`${this.dbPostpath}`).add(Object.assign(Object.assign({}, post), { dateCreate: post.dateCreate.toISOString(), accountDTO: null, username: this.username })).then(doc => {
            doc.update({ id: doc.id });
            return Object.assign(Object.assign({}, post), { id: doc.id });
        }));
    }
    updatePost(post) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.firestore.doc(`${this.dbPostpath}/${post.id}`).update(Object.assign(Object.assign({}, post), { accountDTO: null })).then(_ => {
            return post;
        }));
    }
    deletePost(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.firestore.doc(`${this.dbPostpath}/${id}`).delete().then(_ => new src_app_model_post__WEBPACK_IMPORTED_MODULE_3__["Post"]()));
    }
}
PostFirebaseService.ɵfac = function PostFirebaseService_Factory(t) { return new (t || PostFirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"])); };
PostFirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostFirebaseService, factory: PostFirebaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostFirebaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "2QpE":
/*!**********************************************!*\
  !*** ./src/app/service/component.service.ts ***!
  \**********************************************/
/*! exports provided: ComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentService", function() { return ComponentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ComponentService {
    constructor(factoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    addComponent(componentAppend, args) {
        const factory = this.factoryResolver
            .resolveComponentFactory(componentAppend);
        const component = factory
            .create(this.rootViewContainer.parentInjector);
        args.forEach(arg => {
            component.instance[arg.prop] = arg.value;
        });
        this.rootViewContainer.insert(component.hostView);
    }
}
ComponentService.ɵfac = function ComponentService_Factory(t) { return new (t || ComponentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
ComponentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComponentService, factory: ComponentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, null); })();


/***/ }),

/***/ "2exP":
/*!*****************************************************************!*\
  !*** ./src/app/page/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2yTy":
/*!*************************************************************!*\
  !*** ./src/app/common/flag-acount/flag-acount.component.ts ***!
  \*************************************************************/
/*! exports provided: FlagAcountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagAcountComponent", function() { return FlagAcountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/account-firebase.service */ "A2T0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FlagAcountComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FlagAcountComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LOGOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FlagAcountComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "GO BACK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FlagAcountComponent {
    constructor(
    // private accountService: AccountService,
    accountFirebaseService, route, router) {
        this.accountFirebaseService = accountFirebaseService;
        this.route = route;
        this.router = router;
        this.statusFlag = ['login', 'logout', 'goback'];
        this.currentFlag = this.statusFlag[0];
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                const url = evt.url;
                const currentAccount = this.accountFirebaseService.getCurrentAccountValue;
                if (currentAccount) {
                    this.currentFlag = this.statusFlag[1];
                }
                else {
                    this.currentFlag = this.statusFlag[0];
                }
                if (url.includes('login')) {
                    this.currentFlag = this.statusFlag[2];
                }
                console.log('CURRENT FLAG', this.currentFlag);
            }
        });
    }
    redirecPage() {
        switch (this.currentFlag) {
            case this.statusFlag[0]: {
                this.goLoginPage();
                break;
            }
            case this.statusFlag[1]: {
                this.logout();
                break;
            }
            case this.statusFlag[2]: {
                this.goBack();
                break;
            }
            default: {
                this.goLoginPage();
                break;
            }
        }
    }
    goBack() {
        this.router.navigateByUrl('/duongnh/home');
    }
    goLoginPage() {
        this.accountFirebaseService.logout();
        this.router.navigateByUrl('/login');
    }
    logout() {
        this.accountFirebaseService.logout();
        this.currentFlag = this.statusFlag[1];
        this.goBack();
    }
}
FlagAcountComponent.ɵfac = function FlagAcountComponent_Factory(t) { return new (t || FlagAcountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__["AccountFirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FlagAcountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlagAcountComponent, selectors: [["app-flag-acount"]], decls: 6, vars: 4, consts: [[1, "fixed"], [1, "btn-post", "btn-acount", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"]], template: function FlagAcountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlagAcountComponent_Template_a_click_1_listener() { return ctx.redirecPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FlagAcountComponent_span_3_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FlagAcountComponent_span_4_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FlagAcountComponent_span_5_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.currentFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.statusFlag[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.statusFlag[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.statusFlag[2]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]], styles: [".fixed[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 20%;\r\n    right: 0px;\r\n    z-index: 10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2ZsYWctYWNvdW50L2ZsYWctYWNvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vZmxhZy1hY291bnQvZmxhZy1hY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlagAcountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flag-acount',
                templateUrl: './flag-acount.component.html',
                styleUrls: ['./flag-acount.component.css']
            }]
    }], function () { return [{ type: src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__["AccountFirebaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "8rNN":
/*!****************************************************************************!*\
  !*** ./src/app/modules/profile/profile-detail/profile-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailComponent", function() { return ProfileDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_model_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/account */ "gGTi");
/* harmony import */ var src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/account-firebase.service */ "A2T0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-content/profile-content.component */ "8umm");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _profile_timeline_profile_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-timeline/profile-timeline.component */ "9ECJ");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = function (a0) { return { "width.%": a0 }; };
function ProfileDetailComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.skill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, skill_r1.getPercent()));
} }
class ProfileDetailComponent {
    constructor(
    // private acccountService: AccountService,
    accountFirebaseService, router) {
        this.accountFirebaseService = accountFirebaseService;
        this.router = router;
        this.account = new src_app_model_account__WEBPACK_IMPORTED_MODULE_2__["Account"]();
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarAlt"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"];
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.faMail = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
        this.faAddress = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarkedAlt"];
        this.profileContents = [
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBullseye"], title: 'Objective' },
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLightbulb"], title: 'Education' },
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUsers"], title: 'Work Experience' },
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAward"], title: 'Honors & Awards' },
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPen"], title: 'Additional Information' },
            { hasIcon: true, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBookmark"], title: 'References' },
            { hasIcon: false, icon: undefined, title: 'Skills' },
            { hasIcon: false, icon: undefined, title: 'INTERESTS' }
        ];
    }
    ngOnChanges() {
    }
    ngOnInit() {
        // this.acccountService.getAccountByPhone().subscribe({
        //   next: (res) => {
        //     if (res.status === 200) {
        //       this.account = res.body;
        //     }
        //   },
        //   error: (error) => {
        //     console.error(error);
        //   },
        //   complete: () => {
        //     console.log('Complete get profile');
        //   }
        // });
        // this.currentAccount = this.acccountService.getCurrentAccountValue;
        this.accountFirebaseService.getAccountByUsername().subscribe({
            next: (res) => {
                if (res && res != null) {
                    console.log(`profile ${res}`);
                    this.account = res;
                }
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log('Complete get profile');
            }
        });
        this.currentAccount = this.accountFirebaseService.getCurrentAccountValue;
        this.accountFirebaseService.getEducationAccountByUsername().subscribe(res => {
            if (res && res != null) {
                this.account.educationDTOs = res;
            }
        });
        this.accountFirebaseService.getSkillAccountByUsername().subscribe(res => {
            if (res && res != null) {
                this.account.skillDTOs = res;
            }
        });
        this.accountFirebaseService.getWorkExperienceAccountByUsername().subscribe(res => {
            if (res && res != null) {
                this.account.workExperienceDTOs = res;
            }
        });
    }
    openEditProfilePage() {
        if (this.currentAccount) {
            this.router.navigateByUrl('/duongnh/about/edit');
        }
    }
}
ProfileDetailComponent.ɵfac = function ProfileDetailComponent_Factory(t) { return new (t || ProfileDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_3__["AccountFirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ProfileDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileDetailComponent, selectors: [["app-profile-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 62, vars: 47, consts: [[1, "body-profile", "font-style"], [1, "title"], [1, "__text", "edit-right"], [1, "profile-container"], [1, "contents"], [1, "__item"], [3, "hasIcon", "icon", "title"], ["markdown", "", 1, "__text", 3, "data"], [3, "listItemEducation"], [3, "listItemWorkExperience"], [1, "sub-contents"], [1, "__about"], [2, "font-size", "18px", 3, "icon"], [1, "__skilss"], ["class", "__item", 4, "ngFor", "ngForOf"], [1, "__favorites"], [1, "buttons"], [1, "btn-post", 3, "hidden", "click"], [1, "__name"], [1, "container"], [1, "__skill", 3, "ngStyle"]], template: function ProfileDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-profile-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-profile-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-profile-timeline", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-profile-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-profile-timeline", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-profile-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-profile-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-profile-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-profile-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ProfileDetailComponent_div_51_Template, 5, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-profile-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileDetailComponent_Template_button_click_60_listener() { return ctx.openEditProfilePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "EDIT PROFILE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.account.fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[0].hasIcon)("icon", ctx.profileContents[0].icon)("title", ctx.profileContents[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.account.objective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[1].hasIcon)("icon", ctx.profileContents[1].icon)("title", ctx.profileContents[1].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listItemEducation", ctx.account.educationDTOs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[2].hasIcon)("icon", ctx.profileContents[2].icon)("title", ctx.profileContents[2].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listItemWorkExperience", ctx.account.workExperienceDTOs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[3].hasIcon)("icon", ctx.profileContents[3].icon)("title", ctx.profileContents[3].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.account.awards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[4].hasIcon)("icon", ctx.profileContents[4].icon)("title", ctx.profileContents[4].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.account.addInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[5].hasIcon)("icon", ctx.profileContents[5].icon)("title", ctx.profileContents[5].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.account.references);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCalendar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 44, ctx.account.birthday, "MMM d, y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.account.gender ? "Male" : "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.account.phonenumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faMail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.account.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.account.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[6].hasIcon)("icon", ctx.profileContents[6].icon)("title", ctx.profileContents[6].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.account.skillDTOs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasIcon", ctx.profileContents[7].hasIcon)("icon", ctx.profileContents[7].icon)("title", ctx.profileContents[7].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.account.hobby);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.currentAccount ? false : true);
    } }, directives: [_profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_5__["ProfileContentComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownComponent"], _profile_timeline_profile_timeline_component__WEBPACK_IMPORTED_MODULE_7__["ProfileTimelineComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".body-profile[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0px 10%;\r\n    padding-top: 0px;\r\n    font-family: robotocondensed,Arial,sans-serif;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  background-color: #7c7a79;\r\n  padding: 20px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   .__text[_ngcontent-%COMP%]{\r\n  color: #fcf8e0;\r\n  margin: 0px;\r\n  padding: 5px;\r\n  width: 40%;\r\n  font-size: 42px;\r\n  font-weight: 700;\r\n  line-height: 46px;\r\n  \r\n  \r\n}\r\n\r\n.profile-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border: solid 1px #514f50;\r\n}\r\n\r\n.contents[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    flex-grow: 10;\r\n    background-color: #fcf8e0;\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n\r\n.sub-contents[_ngcontent-%COMP%] {\r\n    flex-grow: 2;\r\n    width: 200px;\r\n    padding: 20px 15px;\r\n    color: #fcf8e0 !important;\r\n    border-right: solid 1px #fcf8e0;\r\n    background-color: #414142;\r\n}\r\n\r\n.sub-contents[_ngcontent-%COMP%]   .__about[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #514f50;\r\n}\r\n\r\n.__about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 10px;\r\n}\r\n\r\n.__about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    \r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.__about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: smaller;\r\n    font-weight: normal;\r\n    margin-left: 10px;\r\n}\r\n\r\n.sub-contents[_ngcontent-%COMP%]   .__skilss[_ngcontent-%COMP%]   .__item[_ngcontent-%COMP%]{\r\n  padding: 2px 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.sub-contents[_ngcontent-%COMP%]   .__skilss[_ngcontent-%COMP%]   .__item[_ngcontent-%COMP%]   .__name[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\n    font-weight: normal;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 10px;\r\n    background-color: #6a6971;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .__skill[_ngcontent-%COMP%] {\r\n    height: 10px;\r\n    background-color: #fcf8e0;\r\n}\r\n\r\n.__favorites[_ngcontent-%COMP%]{\r\n    font-size: smaller;\r\n    font-weight: normal;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%]{\r\n  padding: 20px 0px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZGV0YWlsL3Byb2ZpbGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkNBQTZDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQiwrQkFBK0I7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUNBOzs7R0FHRzs7QUFFSDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUEsNkJBQTZCOztBQUU3QjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLWRldGFpbC9wcm9maWxlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHktcHJvZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMHB4IDEwJTtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogcm9ib3RvY29uZGVuc2VkLEFyaWFsLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjN2E3OTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi50aXRsZSAuX190ZXh0e1xyXG4gIGNvbG9yOiAjZmNmOGUwO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogNDAlO1xyXG4gIGZvbnQtc2l6ZTogNDJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICM3YzdhNzk7ICovXHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzUxNGY1MDsgKi9cclxufVxyXG5cclxuLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNTE0ZjUwO1xyXG59XHJcblxyXG4uY29udGVudHMge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZsZXgtZ3JvdzogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUwO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4vKlxyXG4uY29udGVudHMgLl9faXRlbXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSAqL1xyXG5cclxuLnN1Yi1jb250ZW50cyB7XHJcbiAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZjZjhlMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2ZjZjhlMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDI7XHJcbn1cclxuXHJcbi5zdWItY29udGVudHMgLl9fYWJvdXQge1xyXG4gICAgLyogaGVpZ2h0OiAzMDBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTRmNTA7XHJcbn1cclxuXHJcbi5fX2Fib3V0IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uX19hYm91dCB1bCBsaSB7XHJcbiAgICAvKiBoZWlnaHQ6IDQwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLl9fYWJvdXQgdWwgbGkgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWItY29udGVudHMgLl9fc2tpbHNzIC5fX2l0ZW17XHJcbiAgcGFkZGluZzogMnB4IDBweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnN1Yi1jb250ZW50cyAuX19za2lsc3MgLl9faXRlbSAuX19uYW1le1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGZvciBza2lsbCBiYXJzICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZhNjk3MTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuX19za2lsbCB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUwO1xyXG59XHJcblxyXG4uX19mYXZvcml0ZXN7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-detail',
                templateUrl: './profile-detail.component.html',
                styleUrls: ['./profile-detail.component.css']
            }]
    }], function () { return [{ type: src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_3__["AccountFirebaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "8umm":
/*!******************************************************************************!*\
  !*** ./src/app/modules/profile/profile-content/profile-content.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContentComponent", function() { return ProfileContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




function ProfileContentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.icon);
} }
class ProfileContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileContentComponent.ɵfac = function ProfileContentComponent_Factory(t) { return new (t || ProfileContentComponent)(); };
ProfileContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileContentComponent, selectors: [["app-profile-content"]], inputs: { hasIcon: "hasIcon", icon: "icon", title: "title" }, decls: 6, vars: 5, consts: [[1, "profile-content"], ["class", "icon", 4, "ngIf"], [1, "line"], [1, "icon"], [2, "font-size", "34px", 3, "icon"]], template: function ProfileContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileContentComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("title ", !ctx.hasIcon ? "title_has_icon" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".profile-content[_ngcontent-%COMP%]{\r\n    margin: 20px 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    color: #7c7a79;\r\n    font-weight: bolder;\r\n}\r\n.icon[_ngcontent-%COMP%]{\r\n    flex-grow: .3;\r\n    text-align: left;\r\n}\r\n.icon_title[_ngcontent-%COMP%]{\r\n    background-color: #7c7a79;\r\n    color: #fcf8e0;\r\n    \r\n}\r\n.title[_ngcontent-%COMP%]{\r\n    flex-grow: .5;\r\n}\r\n.title_has_icon[_ngcontent-%COMP%]{\r\n    color: #fcf8e0;\r\n}\r\n.line[_ngcontent-%COMP%]{\r\n    flex-grow: 10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtY29udGVudC9wcm9maWxlLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtY29udGVudC9wcm9maWxlLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNvbnRlbnR7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzdjN2E3OTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmljb257XHJcbiAgICBmbGV4LWdyb3c6IC4zO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaWNvbl90aXRsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YzdhNzk7XHJcbiAgICBjb2xvcjogI2ZjZjhlMDtcclxuICAgIFxyXG59XHJcbi50aXRsZXtcclxuICAgIGZsZXgtZ3JvdzogLjU7XHJcbn1cclxuLnRpdGxlX2hhc19pY29ue1xyXG4gICAgY29sb3I6ICNmY2Y4ZTA7XHJcbn1cclxuLmxpbmV7XHJcbiAgICBmbGV4LWdyb3c6IDEwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-content',
                templateUrl: './profile-content.component.html',
                styleUrls: ['./profile-content.component.css']
            }]
    }], function () { return []; }, { hasIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9ECJ":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/profile/profile-detail/profile-timeline/profile-timeline.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProfileTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTimelineComponent", function() { return ProfileTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_component_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/component.service */ "2QpE");



function ProfileTimelineComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profile-time-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const isEven_r4 = ctx.even;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isEven", isEven_r4)("itemEducation", item_r3);
} }
function ProfileTimelineComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileTimelineComponent_ng_container_3_ng_container_1_Template, 2, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listItem.list);
} }
function ProfileTimelineComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profile-time-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const isEven_r7 = ctx.even;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isEven", isEven_r7)("itemWorkExperience", item_r6);
} }
function ProfileTimelineComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileTimelineComponent_ng_container_4_ng_container_1_Template, 2, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listItem.list);
} }
class ProfileTimelineComponent {
    constructor(componentService, viewContainerRef) {
        this.componentService = componentService;
        this.viewContainerRef = viewContainerRef;
        this.listItem = {
            kind: 'undefined',
            list: [],
        };
        this.self = this;
    }
    ngOnChanges() {
        if (this.listItemEducation) {
            this.listItem = {
                kind: 'Education',
                list: this.listItemEducation
            };
        }
        else {
            this.listItem = {
                kind: 'WorkExperience',
                list: this.listItemWorkExperience
            };
        }
        console.log('INIT TimeLine', this.listItem);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}
ProfileTimelineComponent.ɵfac = function ProfileTimelineComponent_Factory(t) { return new (t || ProfileTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_component_service__WEBPACK_IMPORTED_MODULE_1__["ComponentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ProfileTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileTimelineComponent, selectors: [["app-profile-timeline"]], inputs: { listItemEducation: "listItemEducation", listItemWorkExperience: "listItemWorkExperience", isEdit: "isEdit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 3, consts: [[1, "profile_timeline"], [1, "timeline"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngFor", "ngForOf"], [3, "isEven", "itemEducation"], [3, "isEven", "itemWorkExperience"]], template: function ProfileTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileTimelineComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileTimelineComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.listItem.kind);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "WorkExperience");
    } }, styles: [".profile_timeline[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    \r\n    font-family: Helvetica, sans-serif;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n\r\n.timeline[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    max-width: 800px;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\n.timeline[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 6px;\r\n    background-color: #514f50;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -7px;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 5px 30px;\r\n    margin: 0;\r\n    position: relative;\r\n    background-color: inherit;\r\n    \r\n    width: 45%;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    right: -15px;\r\n    background-color: #ffffff;\r\n    border: 4px solid #FF9F55;\r\n    top: 15px;\r\n    border-radius: 50%;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n\r\n.left[_ngcontent-%COMP%] {\r\n    \r\n    left: -26px;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n}\r\n\r\n\r\n\r\n.left[_ngcontent-%COMP%]::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 18px;\r\n    width: 0;\r\n    z-index: 1;\r\n    right: 20px;\r\n    border: medium solid #df7861;\r\n    border-width: 10px 0 10px 10px;\r\n    border-color: transparent transparent transparent #df7861;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%]::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 18px;\r\n    width: 0;\r\n    z-index: 1;\r\n    left: 20px;\r\n    border: medium solid #df7861;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent #df7861 transparent transparent;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%]::after {\r\n    left: -16px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n    \r\n    .timeline[_ngcontent-%COMP%]::after {\r\n        left: 31px;\r\n    }\r\n    \r\n    .container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        padding-left: 70px;\r\n        padding-right: 25px;\r\n    }\r\n    \r\n    .container[_ngcontent-%COMP%]::before {\r\n        left: 60px;\r\n        border: medium solid #df7861;\r\n        border-width: 10px 10px 10px 0;\r\n        border-color: transparent #df7861 transparent transparent;\r\n    }\r\n    \r\n    .left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after {\r\n        left: 15px;\r\n    }\r\n    \r\n    .right[_ngcontent-%COMP%] {\r\n        left: 0%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZGV0YWlsL3Byb2ZpbGUtdGltZWxpbmUvcHJvZmlsZS10aW1lbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUEsNkNBQTZDOztBQUU3QztJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQSw2Q0FBNkM7O0FBRTdDO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLE1BQU07SUFDTixTQUFTO0lBQ1QsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQSw2QkFBNkI7O0FBRTdCO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUEsZ0NBQWdDOztBQUVoQztJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQSxvQ0FBb0M7O0FBRXBDO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQSxxQ0FBcUM7O0FBRXJDO0lBQ0ksU0FBUztBQUNiOztBQUVBLHNEQUFzRDs7QUFFdEQ7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qix5REFBeUQ7QUFDN0Q7O0FBRUEsc0RBQXNEOztBQUV0RDtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLHlEQUF5RDtBQUM3RDs7QUFFQSxvREFBb0Q7O0FBRXBEO0lBQ0ksV0FBVztBQUNmOztBQUVBLHdFQUF3RTs7QUFFeEU7SUFDSSxtQ0FBbUM7SUFDbkM7UUFDSSxVQUFVO0lBQ2Q7SUFDQSwwQkFBMEI7SUFDMUI7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2QjtJQUNBLHFEQUFxRDtJQUNyRDtRQUNJLFVBQVU7UUFDViw0QkFBNEI7UUFDNUIsOEJBQThCO1FBQzlCLHlEQUF5RDtJQUM3RDtJQUNBLCtDQUErQztJQUMvQztRQUNJLFVBQVU7SUFDZDtJQUNBLHdEQUF3RDtJQUN4RDtRQUNJLFFBQVE7SUFDWjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZGV0YWlsL3Byb2ZpbGUtdGltZWxpbmUvcHJvZmlsZS10aW1lbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVfdGltZWxpbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzQ3NGU1ZDsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuXHJcbi50aW1lbGluZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cclxuXHJcbi50aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxNGY1MDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG59XHJcblxyXG4vKiBDb250YWluZXIgYXJvdW5kIGNvbnRlbnQgKi9cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgLyogd2lkdGg6IDM3JTsgKi9cclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xyXG5cclxuLmNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHJpZ2h0OiAtMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjRkY5RjU1O1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgbGVmdCAqL1xyXG5cclxuLmxlZnQge1xyXG4gICAgLyogbGVmdDogNTJweDsgKi9cclxuICAgIGxlZnQ6IC0yNnB4O1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSByaWdodCAqL1xyXG5cclxuLnJpZ2h0IHtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLyogQWRkIGFycm93cyB0byB0aGUgbGVmdCBjb250YWluZXIgKHBvaW50aW5nIHJpZ2h0KSAqL1xyXG5cclxuLmxlZnQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMThweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgI2RmNzg2MTtcclxuICAgIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2RmNzg2MTtcclxufVxyXG5cclxuLyogQWRkIGFycm93cyB0byB0aGUgcmlnaHQgY29udGFpbmVyIChwb2ludGluZyBsZWZ0KSAqL1xyXG5cclxuLnJpZ2h0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE4cHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgI2RmNzg2MTtcclxuICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2RmNzg2MSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyogRml4IHRoZSBjaXJjbGUgZm9yIGNvbnRhaW5lcnMgb24gdGhlIHJpZ2h0IHNpZGUgKi9cclxuXHJcbi5yaWdodDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogLTE2cHg7XHJcbn1cclxuXHJcbi8qIE1lZGlhIHF1ZXJpZXMgLSBSZXNwb25zaXZlIHRpbWVsaW5lIG9uIHNjcmVlbnMgbGVzcyB0aGFuIDYwMHB4IHdpZGUgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAvKiBQbGFjZSB0aGUgdGltZWxpbWUgdG8gdGhlIGxlZnQgKi9cclxuICAgIC50aW1lbGluZTo6YWZ0ZXIge1xyXG4gICAgICAgIGxlZnQ6IDMxcHg7XHJcbiAgICB9XHJcbiAgICAvKiBGdWxsLXdpZHRoIGNvbnRhaW5lcnMgKi9cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNzBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLyogTWFrZSBzdXJlIHRoYXQgYWxsIGFycm93cyBhcmUgcG9pbnRpbmcgbGVmdHdhcmRzICovXHJcbiAgICAuY29udGFpbmVyOjpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDYwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBtZWRpdW0gc29saWQgI2RmNzg2MTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZGY3ODYxIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgLyogTWFrZSBzdXJlIGFsbCBjaXJjbGVzIGFyZSBhdCB0aGUgc2FtZSBzcG90ICovXHJcbiAgICAubGVmdDo6YWZ0ZXIsIC5yaWdodDo6YWZ0ZXIge1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAvKiBNYWtlIGFsbCByaWdodCBjb250YWluZXJzIGJlaGF2ZSBsaWtlIHRoZSBsZWZ0IG9uZXMgKi9cclxuICAgIC5yaWdodCB7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-timeline',
                templateUrl: './profile-timeline.component.html',
                styleUrls: ['./profile-timeline.component.css']
            }]
    }], function () { return [{ type: src_app_service_component_service__WEBPACK_IMPORTED_MODULE_1__["ComponentService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { listItemEducation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listItemWorkExperience: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9F8z":
/*!*****************************************!*\
  !*** ./src/app/service/form.service.ts ***!
  \*****************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/account */ "gGTi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class FormService {
    constructor(fb) {
        this.fb = fb;
    }
    // createBehaviorForm(): any{
    // }
    createAccountFormGroup() {
        const accountForm = this.fb.group({
            fullname: [''],
            objective: [''],
            awards: [''],
            addInformation: [''],
            references: [''],
            phonenumber: [''],
            birthday: [new Date()],
            address: [''],
            email: [''],
            facebook: [''],
            github: [''],
            twitter: [''],
            gender: [''],
            hobby: [''],
            skillDTOs: this.fb.array([]),
            educationDTOs: this.fb.array([]),
            workExperienceDTOs: this.fb.array([]),
        });
        return accountForm;
    }
    createAccountFormGroupWithData(account, listSkillForm, listEduForm, listWEForm) {
        const accountForm = this.fb.group({
            fullname: [account.fullname],
            objective: [account.objective],
            awards: [account.awards],
            addInformation: [account.addInformation],
            references: [account.references],
            phonenumber: [account.phonenumber],
            birthday: [new Date(account.birthday).toISOString().split('T')[0]],
            address: [account.address],
            email: [account.email],
            facebook: [account.facebook],
            github: [account.github],
            twitter: [account.twitter],
            gender: [account.gender ? 'Male' : 'Female'],
            hobby: [account.hobby],
            skillDTOs: listSkillForm,
            educationDTOs: listEduForm,
            workExperienceDTOs: listWEForm,
        });
        return accountForm;
    }
    createEducationFormGroup(edu) {
        let eduForm = this.fb.group({
            id: [],
            name: [''],
            description: [''],
            dateStart: [''],
            dateEnd: [''],
            gpa: [''],
            sortIndex: [],
            accountDTO: [new _model_account__WEBPACK_IMPORTED_MODULE_1__["Account"]()]
        });
        if (edu) {
            eduForm = this.fb.group({
                id: [edu.id],
                name: [edu.name],
                description: [edu.description],
                dateStart: [edu.dateStart.toISOString().split('T')[0]],
                dateEnd: [edu.dateEnd.toISOString().split('T')[0]],
                gpa: [edu.gpa],
                sortIndex: [edu.sortIndex],
                accountDTO: [edu.accountDTO]
            });
        }
        return eduForm;
    }
    createWorkExperienceFormGroup(we) {
        let weForm = this.fb.group({
            id: [],
            companyOrAppName: [''],
            titleOrPosition: [''],
            description: [''],
            dateStart: [''],
            dateEnd: [''],
            sortIndex: [],
            accountDTO: [new _model_account__WEBPACK_IMPORTED_MODULE_1__["Account"]()]
        });
        if (we) {
            weForm = this.fb.group({
                id: [we.id],
                companyOrAppName: [we.companyOrAppName],
                titleOrPosition: [we.titleOrPosition],
                description: [we.description],
                dateStart: [we.dateStart.toISOString().split('T')[0]],
                dateEnd: [we.dateEnd.toISOString().split('T')[0]],
                sortIndex: [we.sortIndex],
                accountDTO: [we.accountDTO]
            });
        }
        return weForm;
    }
    createSkillFormGroup(skill) {
        let skillForm = this.fb.group({
            id: [null],
            skill: [''],
            level: [0],
            sortIndex: [0],
            accountDTO: [new _model_account__WEBPACK_IMPORTED_MODULE_1__["Account"]()]
        });
        if (skill) {
            skillForm = this.fb.group({
                id: [skill.id],
                skill: [skill.skill],
                level: [skill.level],
                sortIndex: [skill.sortIndex],
                accountDTO: [skill.accountDTO]
            });
        }
        return skillForm;
    }
}
FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
FormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "A2T0":
/*!******************************************************************************!*\
  !*** ./src/app/service/firebase-cloud-firestore/account-firebase.service.ts ***!
  \******************************************************************************/
/*! exports provided: AccountFirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFirebaseService", function() { return AccountFirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _mapping_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mapping.service */ "Usy3");







class AccountFirebaseService {
    constructor(firestore, fireauth, mappingService) {
        this.firestore = firestore;
        this.fireauth = fireauth;
        this.mappingService = mappingService;
        this.dbAccountPath = '/accounts';
        this.dbEducationPath = '/educations';
        this.dbSkillPath = '/skills';
        this.dbWorkExperiencePath = '/work_experiences';
        this.username = 'duongnh';
        this.currentAccountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.fireauth.onAuthStateChanged((user) => {
            if (user) {
                console.log(`user login ${user.displayName}`);
            }
            else {
            }
        });
        this.fireauth.credential.subscribe;
    }
    get getCurrentAccountValue() {
        return this.currentAccountSubject.value;
    }
    getAccountByUsername() {
        let educationOfUserData = [];
        let skillOfUserData = [];
        let workExperienceOfUserData = [];
        const user = this.firestore.collection(this.dbAccountPath, ref => ref.where('username', '==', this.username));
        this.getAdditonalInformationOfUser(this.dbEducationPath).subscribe(data => educationOfUserData = data);
        this.getAdditonalInformationOfUser(this.dbSkillPath).subscribe(data => skillOfUserData = data);
        this.getAdditonalInformationOfUser(this.dbWorkExperiencePath).subscribe(data => workExperienceOfUserData = data);
        return user.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => changes.map(c => {
            const account = Object.assign(Object.assign({}, c.payload.doc.data()), { id: c.payload.doc.id, educationDTOs: educationOfUserData, skillDTOs: skillOfUserData, workExperienceDTOs: workExperienceOfUserData });
            return this.mappingService.mappingAccount(account);
        })[0]));
    }
    getEducationAccountByUsername() {
        return this.getAdditonalInformationOfUser(this.dbEducationPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => this.mappingService.mappingEducationArray(changes)));
    }
    getSkillAccountByUsername() {
        return this.getAdditonalInformationOfUser(this.dbSkillPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => this.mappingService.mappingSkillArray(changes)));
    }
    getWorkExperienceAccountByUsername() {
        return this.getAdditonalInformationOfUser(this.dbWorkExperiencePath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => this.mappingService.mappingWorkExperienceArray(changes)));
    }
    getLinkSocialNetworkById() {
        const user = this.firestore.collection(this.dbAccountPath, ref => ref.where('username', '==', this.username));
        return user.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => changes.map(c => {
            const account = Object.assign(Object.assign({}, c.payload.doc.data()), { id: c.payload.doc.id });
            return this.mappingService.mappingAccount(account);
        })[0]));
    }
    updateByUsername(account) {
        const promiseUpdateInfo = [];
        // update user
        const accountUpdate = Object.assign({}, this.mappingService.mappingAccountToFirebase(account));
        const user = this.firestore.collection(this.dbAccountPath, ref => ref.where('username', '==', this.username));
        user.get().subscribe((datas) => {
            const id = datas.docs[0].id;
            promiseUpdateInfo.push(this.firestore.doc(`${this.dbAccountPath}/${id}`).update(accountUpdate));
        });
        // update education
        const educationOfUser = this.firestore.collection(this.dbEducationPath, ref => ref.where('username', '==', this.username));
        educationOfUser.get().subscribe((educationDatas) => {
            account.educationDTOs.forEach(eduUpdate => {
                const eduMapping = Object.assign(Object.assign({}, this.mappingService.mappingEducationToFirebase(eduUpdate)), { username: this.username });
                if (eduUpdate.id) {
                    // update or delete
                    const docUpdate = educationDatas.docs.find(doc => doc.id == eduUpdate.id);
                    if (docUpdate) {
                        // update edu
                        promiseUpdateInfo.push(this.firestore.doc(`${this.dbEducationPath}/${docUpdate.id}`).update(eduMapping));
                    }
                }
                else {
                    // add new edu
                    promiseUpdateInfo.push(this.firestore.collection(`${this.dbEducationPath}`).add(eduMapping).then());
                }
            });
            const eduIds = account.educationDTOs.map(edu => edu.id);
            educationDatas.docs.filter(doc => !eduIds.includes(doc.id)).forEach(docDelete => {
                // delete
                promiseUpdateInfo.push(this.firestore.doc(`${this.dbEducationPath}/${docDelete.id}`).delete());
            });
        });
        // update workexperience
        const workExperienceOfUser = this.firestore.collection(this.dbWorkExperiencePath, ref => ref.where('username', '==', this.username));
        workExperienceOfUser.get().subscribe((workExperienceDatas) => {
            account.workExperienceDTOs.forEach(workExperienceUpdate => {
                const workExperienceMapping = Object.assign(Object.assign({}, this.mappingService.mappingWorkExperienceToFirebase(workExperienceUpdate)), { username: this.username });
                if (workExperienceUpdate.id) {
                    // update or delete
                    const docUpdate = workExperienceDatas.docs.find(doc => doc.id == workExperienceUpdate.id);
                    if (docUpdate) {
                        // update edu
                        promiseUpdateInfo.push(this.firestore.doc(`${this.dbWorkExperiencePath}/${docUpdate.id}`).update(workExperienceMapping));
                    }
                }
                else {
                    // add new edu
                    promiseUpdateInfo.push(this.firestore.collection(`${this.dbWorkExperiencePath}`).add(workExperienceMapping).then());
                }
            });
            const workExperienceIds = account.workExperienceDTOs.map(we => we.id);
            workExperienceDatas.docs.filter(doc => !workExperienceIds.includes(doc.id)).forEach(docDelete => {
                // delete
                promiseUpdateInfo.push(this.firestore.doc(`${this.dbWorkExperiencePath}/${docDelete.id}`).delete());
            });
        });
        // update skill
        const skillOfUser = this.firestore.collection(this.dbSkillPath, ref => ref.where('username', '==', this.username));
        skillOfUser.get().subscribe((skillDatas) => {
            account.skillDTOs.forEach(skillUpdate => {
                const skillMapping = Object.assign(Object.assign({}, this.mappingService.mappingSkillToFirebase(skillUpdate)), { username: this.username });
                if (skillUpdate.id) {
                    // update or delete
                    const docUpdate = skillDatas.docs.find(doc => doc.id == skillUpdate.id);
                    if (docUpdate) {
                        // update edu
                        promiseUpdateInfo.push(this.firestore.doc(`${this.dbSkillPath}/${docUpdate.id}`).update(skillMapping));
                    }
                }
                else {
                    // add new edu
                    promiseUpdateInfo.push(this.firestore.collection(`${this.dbSkillPath}`).add(skillMapping).then());
                }
            });
            const skillIds = account.skillDTOs.map(we => we.id);
            skillDatas.docs.filter(doc => !skillIds.includes(doc.id)).forEach(docDelete => {
                // delete
                promiseUpdateInfo.push(this.firestore.doc(`${this.dbSkillPath}/${docDelete.id}`).delete());
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(Promise.all(promiseUpdateInfo));
    }
    login(accountLogin) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.fireauth.signInWithEmailAndPassword(accountLogin.email, accountLogin.password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            accountLogin.password = '';
            this.currentAccountSubject.next(accountLogin);
            return user;
        })
            .catch((error) => {
            // login error
        }));
    }
    logout() {
        this.fireauth.signOut().then(() => {
            this.currentAccountSubject.next(null);
        });
    }
    getAdditonalInformationOfUser(dbPath) {
        const additonalOfUser = this.firestore.collection(dbPath, ref => ref.where('username', '==', this.username)
            .orderBy('sortIndex', 'desc'));
        return additonalOfUser.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(changes => changes.map(c => (Object.assign(Object.assign({}, c.payload.doc.data()), { id: c.payload.doc.id })))));
    }
}
AccountFirebaseService.ɵfac = function AccountFirebaseService_Factory(t) { return new (t || AccountFirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mapping_service__WEBPACK_IMPORTED_MODULE_5__["MappingService"])); };
AccountFirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountFirebaseService, factory: AccountFirebaseService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountFirebaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: _mapping_service__WEBPACK_IMPORTED_MODULE_5__["MappingService"] }]; }, null); })();


/***/ }),

/***/ "Aykv":
/*!********************************!*\
  !*** ./src/app/model/skill.ts ***!
  \********************************/
/*! exports provided: Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ "gGTi");

class Skill {
    constructor() {
        this.id = 0;
        this.skill = '';
        this.level = 0;
        this.accountDTO = new _account__WEBPACK_IMPORTED_MODULE_0__["Account"]();
    }
    getPercent() {
        return this.level * 100 / 5;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:8081/api',
    enableDebug: false,
    firebase: {
        apiKey: "AIzaSyDePChvsl7d_CE_G-kft3Cjz1VH9xGgIhI",
        authDomain: "my-blog-2b4df.firebaseapp.com",
        projectId: "my-blog-2b4df",
        storageBucket: "my-blog-2b4df.appspot.com",
        messagingSenderId: "737434600301",
        appId: "1:737434600301:web:3faf45f1f966f402c8d064",
        measurementId: "G-YBQ5VPT7HQ"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Br0M":
/*!*******************************************************************!*\
  !*** ./src/app/page/edit-about-page/edit-about-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditAboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAboutPageComponent", function() { return EditAboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/header/header.component */ "uU1w");
/* harmony import */ var _modules_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/profile/profile-edit/profile-edit.component */ "/Y5S");




class EditAboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditAboutPageComponent.ɵfac = function EditAboutPageComponent_Factory(t) { return new (t || EditAboutPageComponent)(); };
EditAboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditAboutPageComponent, selectors: [["app-edit-about-page"]], decls: 2, vars: 0, consts: [["flagHome", "true", "heading", "About Me", "subHeading", "This is what i do", "dateCreate", ""]], template: function EditAboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profile-edit");
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _modules_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProfileEditComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvZWRpdC1hYm91dC1wYWdlL2VkaXQtYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditAboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-about-page',
                templateUrl: './edit-about-page.component.html',
                styleUrls: ['./edit-about-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CE6K":
/*!******************************************!*\
  !*** ./src/app/service/modal.service.ts ***!
  \******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ModalService {
    constructor() { }
    set(modal, isClose) {
        this.modal = modal;
        console.log('MODALS: ', this.modal);
        this.open(modal.id);
        if (isClose) {
            this.close(modal.id);
        }
    }
    open(id) {
        if (this.modal && this.modal.id === id) {
            this.modal.openModal();
        }
    }
    close(id) {
        if (this.modal && this.modal.id === id) {
            this.modal.closeModal();
        }
        // this.modal.closeModal();
    }
    remove(id) {
        if (this.modal && this.modal.id === id) {
            this.modal = undefined;
        }
    }
    get() {
        return this.modal;
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Cpxq":
/*!*********************************************!*\
  !*** ./src/app/service/jwttoken.service.ts ***!
  \*********************************************/
/*! exports provided: JwttokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwttokenService", function() { return JwttokenService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class JwttokenService {
    constructor() {
        this.KEY_TOKEN_LOCALSTORAGE = 'id_token';
    }
    getTokenInLocalStorage() {
        const token = localStorage.getItem(this.KEY_TOKEN_LOCALSTORAGE);
        if (token != null) {
            return token;
        }
        return null;
    }
    addTokenInLocalStorage(token) {
        localStorage.setItem(this.KEY_TOKEN_LOCALSTORAGE, token);
    }
    removeTokenInLocalStorage() {
        localStorage.removeItem(this.KEY_TOKEN_LOCALSTORAGE);
    }
    getHeaderWithAuthorization() {
        const token = this.getTokenInLocalStorage();
        const optionsHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: `Bearer ${token}`
        });
        return optionsHeader;
    }
}
JwttokenService.ɵfac = function JwttokenService_Factory(t) { return new (t || JwttokenService)(); };
JwttokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JwttokenService, factory: JwttokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JwttokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FtxQ":
/*!***************************************************!*\
  !*** ./src/app/model/work-experience-firebase.ts ***!
  \***************************************************/
/*! exports provided: WorkExperienceFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceFirebase", function() { return WorkExperienceFirebase; });
class WorkExperienceFirebase {
}


/***/ }),

/***/ "J/jw":
/*!*********************************************!*\
  !*** ./src/app/model/education-firebase.ts ***!
  \*********************************************/
/*! exports provided: EducationFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationFirebase", function() { return EducationFirebase; });
class EducationFirebase {
}


/***/ }),

/***/ "NTsJ":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/profile/profile-detail/profile-time-item/profile-time-item.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProfileTimeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTimeItemComponent", function() { return ProfileTimeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_component_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/component.service */ "2QpE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "lR5k");






function ProfileTimeItemComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.obj.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, ctx_r0.item.obj.dateStart, "MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, ctx_r0.item.obj.dateEnd, "MMM y"));
} }
function ProfileTimeItemComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.obj.companyOrAppName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, ctx_r1.item.obj.dateStart, "MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, ctx_r1.item.obj.dateEnd, "MMM y"));
} }
function ProfileTimeItemComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WEB APP BLOG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AUG 2020 - TO PRESENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProfileTimeItemComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.item.obj.titleOrPosition);
} }
function ProfileTimeItemComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("GPA: ", ctx_r4.item.obj.gpa, "");
} }
class ProfileTimeItemComponent {
    constructor(componentService, viewContainerRef, fb) {
        this.componentService = componentService;
        this.viewContainerRef = viewContainerRef;
        this.fb = fb;
        this.item = {
            obj: undefined,
            kind: 'undefined'
        };
    }
    ngOnChanges() {
        console.log('INIT Time Item');
        if (this.itemEducation) {
            this.item = {
                obj: this.itemEducation,
                kind: 'Education'
            };
        }
        else {
            this.item = {
                obj: this.itemWorkExperience,
                kind: 'WorkExperience'
            };
        }
    }
    ngOnInit() {
    }
}
ProfileTimeItemComponent.ɵfac = function ProfileTimeItemComponent_Factory(t) { return new (t || ProfileTimeItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_component_service__WEBPACK_IMPORTED_MODULE_1__["ComponentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
ProfileTimeItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileTimeItemComponent, selectors: [["app-profile-time-item"]], inputs: { itemEducation: "itemEducation", itemWorkExperience: "itemWorkExperience", isEven: "isEven" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 9, consts: [[1, "content"], [3, "ngSwitch"], [1, "head"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf"], [1, "details"], ["markdown", "", 3, "data"], [1, "__name"], [1, "__time"]], template: function ProfileTimeItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileTimeItemComponent_ng_container_4_Template, 11, 9, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileTimeItemComponent_ng_container_5_Template, 11, 9, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileTimeItemComponent_ng_container_6_Template, 5, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileTimeItemComponent_p_7_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileTimeItemComponent_p_10_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx.isEven ? "left" : "right", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.item.kind);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "WorkExperience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.kind === "WorkExperience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.item.obj.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.kind === "Education");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n    padding: 5px 30px;\r\n    margin: 0;\r\n    position: relative;\r\n    background-color: inherit;\r\n    \r\n    width: 45%;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    right: -15px;\r\n    background-color: #ffffff;\r\n    border: 4px solid #FF9F55;\r\n    top: 15px;\r\n    border-radius: 50%;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n\r\n.left[_ngcontent-%COMP%] {\r\n    \r\n    left: -26px;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n}\r\n\r\n\r\n\r\n.left[_ngcontent-%COMP%]::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 18px;\r\n    width: 0;\r\n    z-index: 1;\r\n    right: 20px;\r\n    border: medium solid #df7861;\r\n    border-width: 10px 0 10px 10px;\r\n    border-color: transparent transparent transparent #df7861;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%]::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 18px;\r\n    width: 0;\r\n    z-index: 1;\r\n    left: 20px;\r\n    border: medium solid #df7861;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent #df7861 transparent transparent;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%]::after {\r\n    left: -16px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n    \r\n    .timeline[_ngcontent-%COMP%]::after {\r\n        left: 31px;\r\n    }\r\n    \r\n    .container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        padding-left: 70px;\r\n        padding-right: 25px;\r\n    }\r\n    \r\n    .container[_ngcontent-%COMP%]::before {\r\n        left: 60px;\r\n        border: medium solid #df7861;\r\n        border-width: 10px 10px 10px 0;\r\n        border-color: transparent #df7861 transparent transparent;\r\n    }\r\n    \r\n    .left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after {\r\n        left: 15px;\r\n    }\r\n    \r\n    .right[_ngcontent-%COMP%] {\r\n        left: 0%;\r\n    }\r\n}\r\n\r\n\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    font-weight: normal;\r\n    padding: 10px 15px;\r\n    background-color: #df7861;\r\n    position: relative;\r\n    border-radius: 6px;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]   .__name[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]   .__time[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-style: italic;\r\n    font-size:smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZGV0YWlsL3Byb2ZpbGUtdGltZS1pdGVtL3Byb2ZpbGUtdGltZS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDZCQUE2Qjs7QUFFN0I7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBLG9DQUFvQzs7QUFFcEM7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBLHFDQUFxQzs7QUFFckM7SUFDSSxTQUFTO0FBQ2I7O0FBRUEsc0RBQXNEOztBQUV0RDtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLHlEQUF5RDtBQUM3RDs7QUFFQSxzREFBc0Q7O0FBRXREO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIseURBQXlEO0FBQzdEOztBQUVBLG9EQUFvRDs7QUFFcEQ7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsd0VBQXdFOztBQUV4RTtJQUNJLG1DQUFtQztJQUNuQztRQUNJLFVBQVU7SUFDZDtJQUNBLDBCQUEwQjtJQUMxQjtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0lBQ0EscURBQXFEO0lBQ3JEO1FBQ0ksVUFBVTtRQUNWLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIseURBQXlEO0lBQzdEO0lBQ0EsK0NBQStDO0lBQy9DO1FBQ0ksVUFBVTtJQUNkO0lBQ0Esd0RBQXdEO0lBQ3hEO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLWRldGFpbC9wcm9maWxlLXRpbWUtaXRlbS9wcm9maWxlLXRpbWUtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAvKiB3aWR0aDogMzclOyAqL1xyXG4gICAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXHJcblxyXG4uY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNGRjlGNTU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXHJcblxyXG4ubGVmdCB7XHJcbiAgICAvKiBsZWZ0OiA1MnB4OyAqL1xyXG4gICAgbGVmdDogLTI2cHg7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIHJpZ2h0ICovXHJcblxyXG4ucmlnaHQge1xyXG4gICAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4vKiBBZGQgYXJyb3dzIHRvIHRoZSBsZWZ0IGNvbnRhaW5lciAocG9pbnRpbmcgcmlnaHQpICovXHJcblxyXG4ubGVmdDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZGY3ODYxO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZGY3ODYxO1xyXG59XHJcblxyXG4vKiBBZGQgYXJyb3dzIHRvIHRoZSByaWdodCBjb250YWluZXIgKHBvaW50aW5nIGxlZnQpICovXHJcblxyXG4ucmlnaHQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMThweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZGY3ODYxO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZGY3ODYxIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBGaXggdGhlIGNpcmNsZSBmb3IgY29udGFpbmVycyBvbiB0aGUgcmlnaHQgc2lkZSAqL1xyXG5cclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgICBsZWZ0OiAtMTZweDtcclxufVxyXG5cclxuLyogTWVkaWEgcXVlcmllcyAtIFJlc3BvbnNpdmUgdGltZWxpbmUgb24gc2NyZWVucyBsZXNzIHRoYW4gNjAwcHggd2lkZSAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xyXG4gICAgLnRpbWVsaW5lOjphZnRlciB7XHJcbiAgICAgICAgbGVmdDogMzFweDtcclxuICAgIH1cclxuICAgIC8qIEZ1bGwtd2lkdGggY29udGFpbmVycyAqL1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCBhbGwgYXJyb3dzIGFyZSBwb2ludGluZyBsZWZ0d2FyZHMgKi9cclxuICAgIC5jb250YWluZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgbGVmdDogNjBweDtcclxuICAgICAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZGY3ODYxO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNkZjc4NjEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAvKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuICAgIC5sZWZ0OjphZnRlciwgLnJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIC8qIE1ha2UgYWxsIHJpZ2h0IGNvbnRhaW5lcnMgYmVoYXZlIGxpa2UgdGhlIGxlZnQgb25lcyAqL1xyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCBjb250ZW50ICovXHJcblxyXG4uY29udGVudCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmNzg2MTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmhlYWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5oZWFkIC5fX25hbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5oZWFkIC5fX3RpbWV7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmRldGFpbHMgcHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTpzbWFsbGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileTimeItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-time-item',
                templateUrl: './profile-time-item.component.html',
                styleUrls: ['./profile-time-item.component.css']
            }]
    }], function () { return [{ type: src_app_service_component_service__WEBPACK_IMPORTED_MODULE_1__["ComponentService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { itemEducation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemWorkExperience: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEven: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PH3S":
/*!***************************************************************!*\
  !*** ./src/app/page/new-post-page/new-post-page.component.ts ***!
  \***************************************************************/
/*! exports provided: NewPostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostPageComponent", function() { return NewPostPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_posts_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/posts/post-add/post-add.component */ "aJmx");



class NewPostPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewPostPageComponent.ɵfac = function NewPostPageComponent_Factory(t) { return new (t || NewPostPageComponent)(); };
NewPostPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewPostPageComponent, selectors: [["app-new-post-page"]], decls: 1, vars: 1, consts: [[3, "flagEdit"]], template: function NewPostPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-add", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flagEdit", false);
    } }, directives: [_modules_posts_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_1__["PostAddComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbmV3LXBvc3QtcGFnZS9uZXctcG9zdC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPostPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-post-page',
                templateUrl: './new-post-page.component.html',
                styleUrls: ['./new-post-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QSbw":
/*!************************************!*\
  !*** ./src/app/model/education.ts ***!
  \************************************/
/*! exports provided: Education */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
class Education {
}


/***/ }),

/***/ "R5or":
/*!********************************************************************!*\
  !*** ./src/app/modules/posts/post-detail/post-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/account-firebase.service */ "A2T0");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "lR5k");





class PostDetailComponent {
    constructor(route, router, 
    // private accountService: AccountService
    accountFirebaseService) {
        this.route = route;
        this.router = router;
        this.accountFirebaseService = accountFirebaseService;
    }
    ngOnChanges() {
        this.currentAccount = this.accountFirebaseService.getCurrentAccountValue;
    }
    ngOnInit() {
        this.currentAccount = this.accountFirebaseService.getCurrentAccountValue;
    }
    editPost() {
        if (this.currentAccount) {
            const url = this.router.url;
            const indexDetail = url.lastIndexOf('/');
            const idPost = url.substring(indexDetail + 1);
            this.router.navigateByUrl(`/duongnh/post/edit/${idPost}`);
        }
    }
}
PostDetailComponent.ɵfac = function PostDetailComponent_Factory(t) { return new (t || PostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__["AccountFirebaseService"])); };
PostDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostDetailComponent, selectors: [["app-post-detail"]], inputs: { content: "content" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 3, consts: [[1, "body-blog", "body-detail"], ["markdown", "", 1, "content-post", 3, "data"], [1, "btn-post", 3, "hidden", "click"]], template: function PostDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostDetailComponent_Template_button_click_3_listener() { return ctx.editPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "EDIT POST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.currentAccount ? false : true);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"]], styles: [".body-detail[_ngcontent-%COMP%] {\r\n    align-items: flex-start;\r\n}\r\n\r\n.content-post[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    font-size: large;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    line-height: 1.75;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0LWRldGFpbC9wb3N0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvRUFBb0U7SUFDcEUsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0LWRldGFpbC9wb3N0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHktZGV0YWlsIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uY29udGVudC1wb3N0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-detail',
                templateUrl: './post-detail.component.html',
                styleUrls: ['./post-detail.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__["AccountFirebaseService"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "S19W":
/*!*******************************!*\
  !*** ./src/app/model/post.ts ***!
  \*******************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ "gGTi");

class Post {
    constructor() {
        this.id = 0;
        this.heading = '';
        this.subHeading = '';
        this.urlImage = '';
        this.content = '';
        this.dateCreate = new Date();
        this.accountDTO = new _account__WEBPACK_IMPORTED_MODULE_0__["Account"]();
    }
}


/***/ }),

/***/ "S5Yh":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/profile/profile-edit/profile-timeline-edit/profile-timeline-edit.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProfileTimelineEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTimelineEditComponent", function() { return ProfileTimelineEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


function ProfileTimelineEditComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profile-time-item-edit", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const isEven_r4 = ctx.even;
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentComponent", ctx_r2.self)("isEven", isEven_r4)("itemEducationForm", item_r3)("index", i_r5);
} }
function ProfileTimelineEditComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileTimelineEditComponent_ng_container_3_ng_container_1_Template, 2, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listFormByKind.formArray.controls);
} }
function ProfileTimelineEditComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profile-time-item-edit", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const isEven_r8 = ctx.even;
    const i_r9 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentComponent", ctx_r6.self)("isEven", isEven_r8)("itemWorkExperienceForm", item_r7)("index", i_r9);
} }
function ProfileTimelineEditComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileTimelineEditComponent_ng_container_4_ng_container_1_Template, 2, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listFormByKind.formArray.controls);
} }
class ProfileTimelineEditComponent {
    constructor() {
        this.self = this;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.listFormByKind = {
            kind: 'WorkExperience',
            formArray: this.listWorkExperienceForm
        };
        if (this.listEducationForm) {
            this.listFormByKind = {
                kind: 'Education',
                formArray: this.listEducationForm
            };
        }
        console.log('CHANGE TimeLine Edit', this.listFormByKind);
    }
    counter(i) {
        return new Array(i);
    }
}
ProfileTimelineEditComponent.ɵfac = function ProfileTimelineEditComponent_Factory(t) { return new (t || ProfileTimelineEditComponent)(); };
ProfileTimelineEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileTimelineEditComponent, selectors: [["app-profile-timeline-edit"]], inputs: { listEducationForm: "listEducationForm", listWorkExperienceForm: "listWorkExperienceForm" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 3, consts: [[1, "profile_timeline"], [1, "timeline"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngFor", "ngForOf"], [3, "parentComponent", "isEven", "itemEducationForm", "index"], [3, "parentComponent", "isEven", "itemWorkExperienceForm", "index"]], template: function ProfileTimelineEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileTimelineEditComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileTimelineEditComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.listFormByKind.kind);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "WorkExperience");
    } }, styles: [".profile_timeline[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    \r\n    font-family: Helvetica, sans-serif;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n\r\n.timeline[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    max-width: 800px;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\n.timeline[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 6px;\r\n    background-color: #514f50;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -7px;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 5px 30px;\r\n    margin: 0;\r\n    position: relative;\r\n    background-color: inherit;\r\n    \r\n    width: 45%;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    right: -15px;\r\n    background-color: #ffffff;\r\n    border: 4px solid #FF9F55;\r\n    top: 15px;\r\n    border-radius: 50%;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n\r\n.left[_ngcontent-%COMP%] {\r\n    \r\n    left: -26px;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n}\r\n\r\n\r\n\r\n.left[_ngcontent-%COMP%]::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 18px;\r\n    width: 0;\r\n    z-index: 1;\r\n    right: 20px;\r\n    border: medium solid #df7861;\r\n    border-width: 10px 0 10px 10px;\r\n    border-color: transparent transparent transparent #df7861;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%]::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 18px;\r\n    width: 0;\r\n    z-index: 1;\r\n    left: 20px;\r\n    border: medium solid #df7861;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent #df7861 transparent transparent;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%]::after {\r\n    left: -16px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n    \r\n    .timeline[_ngcontent-%COMP%]::after {\r\n        left: 31px;\r\n    }\r\n    \r\n    .container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        padding-left: 70px;\r\n        padding-right: 25px;\r\n    }\r\n    \r\n    .container[_ngcontent-%COMP%]::before {\r\n        left: 60px;\r\n        border: medium solid #df7861;\r\n        border-width: 10px 10px 10px 0;\r\n        border-color: transparent #df7861 transparent transparent;\r\n    }\r\n    \r\n    .left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after {\r\n        left: 15px;\r\n    }\r\n    \r\n    .right[_ngcontent-%COMP%] {\r\n        left: 0%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZWRpdC9wcm9maWxlLXRpbWVsaW5lLWVkaXQvcHJvZmlsZS10aW1lbGluZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSw2Q0FBNkM7O0FBRTdDO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBLDZDQUE2Qzs7QUFFN0M7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsTUFBTTtJQUNOLFNBQVM7SUFDVCxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBLDZCQUE2Qjs7QUFFN0I7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBLG9DQUFvQzs7QUFFcEM7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBLHFDQUFxQzs7QUFFckM7SUFDSSxTQUFTO0FBQ2I7O0FBRUEsc0RBQXNEOztBQUV0RDtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLHlEQUF5RDtBQUM3RDs7QUFFQSxzREFBc0Q7O0FBRXREO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIseURBQXlEO0FBQzdEOztBQUVBLG9EQUFvRDs7QUFFcEQ7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsd0VBQXdFOztBQUV4RTtJQUNJLG1DQUFtQztJQUNuQztRQUNJLFVBQVU7SUFDZDtJQUNBLDBCQUEwQjtJQUMxQjtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0lBQ0EscURBQXFEO0lBQ3JEO1FBQ0ksVUFBVTtRQUNWLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIseURBQXlEO0lBQzdEO0lBQ0EsK0NBQStDO0lBQy9DO1FBQ0ksVUFBVTtJQUNkO0lBQ0Esd0RBQXdEO0lBQ3hEO1FBQ0ksUUFBUTtJQUNaO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2ZpbGUvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtdGltZWxpbmUtZWRpdC9wcm9maWxlLXRpbWVsaW5lLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlX3RpbWVsaW5lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7ICovXHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXHJcblxyXG4udGltZWxpbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXHJcblxyXG4udGltZWxpbmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTRmNTA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcclxufVxyXG5cclxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIC8qIHdpZHRoOiAzNyU7ICovXHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4vKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cclxuXHJcbi5jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICByaWdodDogLTE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI0ZGOUY1NTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cclxuXHJcbi5sZWZ0IHtcclxuICAgIC8qIGxlZnQ6IDUycHg7ICovXHJcbiAgICBsZWZ0OiAtMjZweDtcclxufVxyXG5cclxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgcmlnaHQgKi9cclxuXHJcbi5yaWdodCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhcnJvd3MgdG8gdGhlIGxlZnQgY29udGFpbmVyIChwb2ludGluZyByaWdodCkgKi9cclxuXHJcbi5sZWZ0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE4cHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkICNkZjc4NjE7XHJcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNkZjc4NjE7XHJcbn1cclxuXHJcbi8qIEFkZCBhcnJvd3MgdG8gdGhlIHJpZ2h0IGNvbnRhaW5lciAocG9pbnRpbmcgbGVmdCkgKi9cclxuXHJcbi5yaWdodDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkICNkZjc4NjE7XHJcbiAgICBib3JkZXItd2lkdGg6IDEwcHggMTBweCAxMHB4IDA7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNkZjc4NjEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIEZpeCB0aGUgY2lyY2xlIGZvciBjb250YWluZXJzIG9uIHRoZSByaWdodCBzaWRlICovXHJcblxyXG4ucmlnaHQ6OmFmdGVyIHtcclxuICAgIGxlZnQ6IC0xNnB4O1xyXG59XHJcblxyXG4vKiBNZWRpYSBxdWVyaWVzIC0gUmVzcG9uc2l2ZSB0aW1lbGluZSBvbiBzY3JlZW5zIGxlc3MgdGhhbiA2MDBweCB3aWRlICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLyogUGxhY2UgdGhlIHRpbWVsaW1lIHRvIHRoZSBsZWZ0ICovXHJcbiAgICAudGltZWxpbmU6OmFmdGVyIHtcclxuICAgICAgICBsZWZ0OiAzMXB4O1xyXG4gICAgfVxyXG4gICAgLyogRnVsbC13aWR0aCBjb250YWluZXJzICovXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIC8qIE1ha2Ugc3VyZSB0aGF0IGFsbCBhcnJvd3MgYXJlIHBvaW50aW5nIGxlZnR3YXJkcyAqL1xyXG4gICAgLmNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkICNkZjc4NjE7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2RmNzg2MSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIC8qIE1ha2Ugc3VyZSBhbGwgY2lyY2xlcyBhcmUgYXQgdGhlIHNhbWUgc3BvdCAqL1xyXG4gICAgLmxlZnQ6OmFmdGVyLCAucmlnaHQ6OmFmdGVyIHtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLyogTWFrZSBhbGwgcmlnaHQgY29udGFpbmVycyBiZWhhdmUgbGlrZSB0aGUgbGVmdCBvbmVzICovXHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileTimelineEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-timeline-edit',
                templateUrl: './profile-timeline-edit.component.html',
                styleUrls: ['./profile-timeline-edit.component.css']
            }]
    }], function () { return []; }, { listEducationForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listWorkExperienceForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "SFp6":
/*!******************************************!*\
  !*** ./src/app/model/work-experience.ts ***!
  \******************************************/
/*! exports provided: WorkExperience */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperience", function() { return WorkExperience; });
class WorkExperience {
}


/***/ }),

/***/ "SHcG":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/profile/profile-edit/skill-edit/skill-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SkillEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillEditComponent", function() { return SkillEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/form.service */ "9F8z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _profile_control_edit_profile_control_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-control-edit/profile-control-edit.component */ "tPnv");






const _c0 = function (a0) { return { "width.%": a0 }; };
const _c1 = function (a0, a1) { return { skillFormGroup: a0, index: a1 }; };
function SkillEditComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillEditComponent_div_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const skillFormGroup_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openSkillRating(skillFormGroup_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-profile-control-edit", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addItemForm", function SkillEditComponent_div_1_Template_app_profile_control_edit_addItemForm_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addItemForm($event); })("deleteItemForm", function SkillEditComponent_div_1_Template_app_profile_control_edit_deleteItemForm_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteItemForm($event); })("moveUpItemForm", function SkillEditComponent_div_1_Template_app_profile_control_edit_moveUpItemForm_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.moveItemForm($event); })("moveDownItemForm", function SkillEditComponent_div_1_Template_app_profile_control_edit_moveDownItemForm_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.moveItemForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skillFormGroup_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const l_r3 = ctx.count;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", skillFormGroup_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.getPercentSkill(skillFormGroup_r1.get("level"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, skillFormGroup_r1, i_r2))("maxIndex", l_r3);
} }
class SkillEditComponent {
    constructor(formService) {
        this.formService = formService;
        this.openSkillRatingModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges() {
        console.log('List Skill Form: ', this.listSkillForm);
    }
    ngOnInit() {
    }
    openSkillRating(itemSkillFormGroup) {
        this.openSkillRatingModal.emit(itemSkillFormGroup);
    }
    addItemForm(itemSkillFormGroup) {
        const skillFormGroup = itemSkillFormGroup.skillFormGroup;
        const skillClone = skillFormGroup.getRawValue();
        const skillFormGroupClone = this.formService.createSkillFormGroup(undefined);
        skillFormGroupClone.patchValue(skillClone);
        skillFormGroupClone.get('skill').setValue(skillFormGroupClone.get('skill').value + ' copy');
        skillFormGroupClone.get('id').setValue(null);
        console.log('ADD SKILL: ', itemSkillFormGroup, skillFormGroupClone);
        this.listSkillForm.insert(itemSkillFormGroup.index + 1, skillFormGroupClone);
        const indexStart = itemSkillFormGroup.index;
        const sortIndexStart = skillFormGroupClone.get('sortIndex').value + 1;
        this.updateSortIndex(indexStart, sortIndexStart);
    }
    deleteItemForm(index) {
        console.log('DELETE SKILL: ', index);
        this.listSkillForm.removeAt(index);
    }
    // moveItemForm(indexObj: { oldIndex, newIndex }): void {
    //   console.log('MOVE SKILL: ', indexObj);
    //   const temp = this.skillDTOs[indexObj.oldIndex];
    //   this.skillDTOs[indexObj.oldIndex] = this.skillDTOs[indexObj.newIndex];
    //   this.skillDTOs[indexObj.newIndex] = temp;
    //   const newSortIndexTemp = this.skillDTOs[indexObj.newIndex].sortIndex;
    //   this.skillDTOs[indexObj.newIndex].sortIndex = this.skillDTOs[indexObj.oldIndex].sortIndex;
    //   this.skillDTOs[indexObj.oldIndex].sortIndex = newSortIndexTemp;
    //   console.log('SKILLDTOS: ', this.skillDTOs);
    // }
    moveItemForm(indexClass) {
        console.log('MOVE UP: ', indexClass);
        this.replaceTwoControl(indexClass.oldIndex, indexClass.newIndex);
        console.log('FORM ARRAY: ', this.listSkillForm);
    }
    replaceTwoControl(oldIndex, newIndex) {
        const formArray = this.listSkillForm;
        if (newIndex !== oldIndex) {
            const controlName = 'sortIndex';
            const oldItemFormGroup = formArray.at(oldIndex);
            const sortIndexOldControl = oldItemFormGroup.get(controlName);
            const sortIndexOld = sortIndexOldControl.value;
            const newItemFormGroup = formArray.at(newIndex);
            const sortIndexNewControl = newItemFormGroup.get(controlName);
            const sortIndexNew = sortIndexNewControl.value;
            sortIndexOldControl.setValue(sortIndexNew, Number);
            sortIndexNewControl.setValue(sortIndexOld, Number);
            // const dataOldFormGroupClone = oldItemFormGroup.getRawValue();
            // const oldFormGroupClone = this.fb.group(dataOldFormGroupClone);
            // const dataNewFormGroupClone = newItemFormGroup.getRawValue();
            // const newFormGroupClone = this.fb.group(dataNewFormGroupClone);
            formArray.insert(oldIndex, newItemFormGroup);
            formArray.removeAt(oldIndex + 1);
            formArray.insert(newIndex, oldItemFormGroup);
            formArray.removeAt(newIndex + 1);
        }
    }
    updateSortIndex(indexStart, sortIndexStart) {
        console.log('INDEX: ', indexStart, sortIndexStart);
        let sortIndex = sortIndexStart;
        for (let i = indexStart; i >= 0; i--) {
            console.log('INDEX LOOP: ', i, sortIndex);
            this.listSkillForm.at(i).get('sortIndex').setValue(sortIndex);
            sortIndex++;
        }
    }
    getPercentSkill(levelFormControl) {
        const level = levelFormControl.value;
        if (level) {
            return level * 100 / 5;
        }
        return 0;
    }
}
SkillEditComponent.ɵfac = function SkillEditComponent_Factory(t) { return new (t || SkillEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"])); };
SkillEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillEditComponent, selectors: [["app-skill-edit"]], inputs: { listSkillForm: "listSkillForm" }, outputs: { openSkillRatingModal: "openSkillRatingModal" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "__skilss"], ["class", "__item", 4, "ngFor", "ngForOf"], [1, "__item"], [3, "formGroup"], ["type", "text", "formControlName", "skill", 1, "__name"], [1, "container", 3, "click"], [1, "__skill", 3, "ngStyle"], [3, "item", "maxIndex", "addItemForm", "deleteItemForm", "moveUpItemForm", "moveDownItemForm"]], template: function SkillEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillEditComponent_div_1_Template, 6, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listSkillForm.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _profile_control_edit_profile_control_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProfileControlEditComponent"]], styles: [".__item[_ngcontent-%COMP%]{\r\n  border: 1px solid #414142;\r\n  padding: 0px 0px;\r\n  margin: 40px 0px;\r\n  position: relative;\r\n  \r\n}\r\n\r\n.__item[_ngcontent-%COMP%]   .__name[_ngcontent-%COMP%]{\r\n  font-size: smaller;\r\n  font-weight: normal;\r\n  margin-bottom: 5px;\r\n  background-color: #414142;\r\n  border: 1px solid #414142;\r\n  outline: none;\r\n  transition: all 0.5s ease;\r\n}\r\n.__item[_ngcontent-%COMP%]   .__name[_ngcontent-%COMP%]:hover, .__item[_ngcontent-%COMP%]   .__name[_ngcontent-%COMP%]:focus{\r\n  border: 1px solid #fcf8e0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 10px;\r\n  background-color: #6a6971;\r\n}\r\n.container[_ngcontent-%COMP%]   .__skill[_ngcontent-%COMP%] {\r\n  height: 10px;\r\n  background-color: #fcf8e0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZWRpdC9za2lsbC1lZGl0L3NraWxsLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFDQTs7R0FFRztBQUNIO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZWRpdC9za2lsbC1lZGl0L3NraWxsLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5fX2l0ZW17XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQxNDE0MjtcclxuICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gIG1hcmdpbjogNDBweCAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIHRyYW5zaXRpb246IGFsbCAwLjVzOyAqL1xyXG59XHJcbi8qIC5fX2l0ZW06aG92ZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZjZjhlMDtcclxufSAqL1xyXG4uX19pdGVtIC5fX25hbWV7XHJcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQxNDE0MjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuLl9faXRlbSAuX19uYW1lOmhvdmVyLCAuX19pdGVtIC5fX25hbWU6Zm9jdXN7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZjZjhlMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YTY5NzE7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLl9fc2tpbGwge1xyXG4gIGhlaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skill-edit',
                templateUrl: './skill-edit.component.html',
                styleUrls: ['./skill-edit.component.css']
            }]
    }], function () { return [{ type: src_app_service_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"] }]; }, { listSkillForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openSkillRatingModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_flag_acount_flag_acount_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/flag-acount/flag-acount.component */ "2yTy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Blog-Dependency';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-flag-acount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_common_flag_acount_flag_acount_component__WEBPACK_IMPORTED_MODULE_1__["FlagAcountComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TgMo":
/*!*****************************************!*\
  !*** ./src/app/model/skill-firebase.ts ***!
  \*****************************************/
/*! exports provided: SkillFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillFirebase", function() { return SkillFirebase; });
class SkillFirebase {
}


/***/ }),

/***/ "Usy3":
/*!********************************************!*\
  !*** ./src/app/service/mapping.service.ts ***!
  \********************************************/
/*! exports provided: MappingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingService", function() { return MappingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/account */ "gGTi");
/* harmony import */ var _model_education__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/education */ "QSbw");
/* harmony import */ var _model_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/post */ "S19W");
/* harmony import */ var _model_skill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/skill */ "Aykv");
/* harmony import */ var _model_work_experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/work-experience */ "SFp6");
/* harmony import */ var _model_account_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/account-firebase */ "0yTC");
/* harmony import */ var _model_education_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/education-firebase */ "J/jw");
/* harmony import */ var _model_work_experience_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/work-experience-firebase */ "FtxQ");
/* harmony import */ var _model_skill_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/skill-firebase */ "TgMo");











class MappingService {
    constructor() { }
    mappingAccount(accountMapping) {
        const account = new _model_account__WEBPACK_IMPORTED_MODULE_1__["Account"]();
        account.username = accountMapping.username;
        account.phonenumber = accountMapping.phonenumber;
        account.password = accountMapping.password;
        account.dateCreate = new Date(accountMapping.dateCreate);
        account.fullname = accountMapping.fullname;
        account.birthday = new Date(accountMapping.birthday);
        account.address = accountMapping.address;
        account.email = accountMapping.email;
        account.gender = accountMapping.gender;
        account.github = accountMapping.github;
        account.facebook = accountMapping.facebook;
        account.twitter = accountMapping.twitter;
        account.role = accountMapping.role;
        account.hobby = accountMapping.hobby;
        account.objective = accountMapping.objective;
        account.addInformation = accountMapping.addInformation;
        account.references = accountMapping.references;
        account.awards = accountMapping.awards;
        if (accountMapping.postDTOs) {
            account.postDTOs = this.mappingPostArray(accountMapping.postDTOs);
        }
        if (accountMapping.skillDTOs) {
            account.skillDTOs = this.mappingSkillArray(accountMapping.skillDTOs);
        }
        if (accountMapping.educationDTOs) {
            account.educationDTOs = this.mappingEducationArray(accountMapping.educationDTOs);
        }
        if (accountMapping.workExperienceDTOs) {
            account.workExperienceDTOs = this.mappingWorkExperienceArray(accountMapping.workExperienceDTOs);
        }
        return account;
    }
    mappingAccountToFirebase(accountMapping) {
        const account = new _model_account_firebase__WEBPACK_IMPORTED_MODULE_6__["AccountFirebase"]();
        account.username = accountMapping.username;
        account.phonenumber = accountMapping.phonenumber;
        account.password = accountMapping.password;
        account.dateCreate = accountMapping.dateCreate; // new Date()
        account.fullname = accountMapping.fullname;
        account.birthday = accountMapping.birthday; // new Date()
        account.address = accountMapping.address;
        account.email = accountMapping.email;
        account.gender = accountMapping.gender;
        account.github = accountMapping.github;
        account.facebook = accountMapping.facebook;
        account.twitter = accountMapping.twitter;
        account.hobby = accountMapping.hobby;
        account.objective = accountMapping.objective;
        account.addInformation = accountMapping.addInformation;
        account.references = accountMapping.references;
        account.awards = accountMapping.awards;
        return account;
    }
    mappingEducationToFirebase(educationMapping) {
        const education = new _model_education_firebase__WEBPACK_IMPORTED_MODULE_7__["EducationFirebase"]();
        education.id = educationMapping.id;
        education.sortIndex = educationMapping.sortIndex;
        education.username = '';
        education.dateEnd = educationMapping.dateEnd;
        education.dateStart = educationMapping.dateStart;
        education.description = educationMapping.description;
        education.gpa = educationMapping.gpa;
        education.name = educationMapping.name;
        return education;
    }
    mappingWorkExperienceToFirebase(workExperienceMapping) {
        const workExperience = new _model_work_experience_firebase__WEBPACK_IMPORTED_MODULE_8__["WorkExperienceFirebase"]();
        workExperience.id = workExperienceMapping.id;
        workExperience.companyOrAppName = workExperienceMapping.companyOrAppName;
        workExperience.titleOrPosition = workExperienceMapping.titleOrPosition;
        workExperience.description = workExperienceMapping.description;
        workExperience.dateStart = workExperienceMapping.dateStart;
        workExperience.dateEnd = workExperienceMapping.dateEnd;
        workExperience.sortIndex = workExperienceMapping.sortIndex;
        return workExperience;
    }
    mappingSkillToFirebase(skillMapping) {
        const skill = new _model_skill_firebase__WEBPACK_IMPORTED_MODULE_9__["SkillFirebase"]();
        skill.id = skillMapping.id;
        skill.skill = skillMapping.skill;
        skill.level = skillMapping.level;
        skill.sortIndex = skillMapping.sortIndex;
        return skill;
    }
    mappingPost(postMapping) {
        const post = new _model_post__WEBPACK_IMPORTED_MODULE_3__["Post"]();
        post.id = postMapping.id;
        post.heading = postMapping.heading;
        post.subHeading = postMapping.subHeading;
        post.content = postMapping.content;
        post.urlImage = postMapping.urlImage;
        // post.dateCreate = new Date(post.dateCreate);
        post.dateCreate = post.dateCreate;
        if (postMapping.accountDTO) {
            const account = new _model_account__WEBPACK_IMPORTED_MODULE_1__["Account"]();
            account.username = postMapping.accountDTO.username;
            post.accountDTO = account;
        }
        return post;
    }
    mappingPostArray(postArrayMapping) {
        let posts = new Array();
        posts = postArrayMapping.map(post => {
            return this.mappingPost(post);
        });
        return posts;
    }
    mappingSkill(skillMapping) {
        const skill = new _model_skill__WEBPACK_IMPORTED_MODULE_4__["Skill"]();
        skill.id = skillMapping.id;
        skill.skill = skillMapping.skill;
        skill.level = skillMapping.level;
        skill.sortIndex = skillMapping.sortIndex;
        if (skillMapping.accountDTO) {
            const account = new _model_account__WEBPACK_IMPORTED_MODULE_1__["Account"]();
            account.username = skillMapping.accountDTO.username;
            skill.accountDTO = account;
        }
        return skill;
    }
    mappingSkillArray(skillArrayMapping) {
        let skills = new Array();
        skills = skillArrayMapping.map(skill => {
            return this.mappingSkill(skill);
        });
        return skills;
    }
    mappingEducation(educationMapping) {
        const education = new _model_education__WEBPACK_IMPORTED_MODULE_2__["Education"]();
        education.id = educationMapping.id;
        education.name = educationMapping.name;
        education.gpa = educationMapping.gpa;
        education.description = educationMapping.description;
        education.dateStart = new Date(educationMapping.dateStart);
        education.dateEnd = new Date(educationMapping.dateEnd);
        education.sortIndex = educationMapping.sortIndex;
        if (educationMapping.accountDTO) {
            const account = new _model_account__WEBPACK_IMPORTED_MODULE_1__["Account"]();
            account.username = educationMapping.accountDTO.username;
            education.accountDTO = account;
        }
        return education;
    }
    mappingEducationArray(educationArrayMapping) {
        let educations = new Array();
        educations = educationArrayMapping.map(education => {
            return this.mappingEducation(education);
        });
        return educations;
    }
    mappingWorkExperience(weMapping) {
        const workExperience = new _model_work_experience__WEBPACK_IMPORTED_MODULE_5__["WorkExperience"]();
        workExperience.id = weMapping.id;
        workExperience.companyOrAppName = weMapping.companyOrAppName;
        workExperience.titleOrPosition = weMapping.titleOrPosition;
        workExperience.description = weMapping.description;
        workExperience.dateStart = new Date(weMapping.dateStart);
        workExperience.dateEnd = new Date(weMapping.dateEnd);
        workExperience.sortIndex = weMapping.sortIndex;
        if (weMapping.accountDTO) {
            const account = new _model_account__WEBPACK_IMPORTED_MODULE_1__["Account"]();
            account.username = weMapping.accountDTO.username;
            workExperience.accountDTO = account;
        }
        return workExperience;
    }
    mappingWorkExperienceArray(workExperienceArrayMapping) {
        let workExperiences = new Array();
        workExperiences = workExperienceArrayMapping.map(we => {
            return this.mappingWorkExperience(we);
        });
        return workExperiences;
    }
}
MappingService.ɵfac = function MappingService_Factory(t) { return new (t || MappingService)(); };
MappingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MappingService, factory: MappingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MappingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YHtn":
/*!*********************************************************!*\
  !*** ./src/app/page/about-page/about-page.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/header/header.component */ "uU1w");
/* harmony import */ var _modules_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/profile/profile-detail/profile-detail.component */ "8rNN");




class AboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 2, vars: 0, consts: [["flagHome", "true", "heading", "About Me", "subHeading", "This is what i do", "dateCreate", ""]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profile-detail");
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _modules_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProfileDetailComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-page',
                templateUrl: './about-page.component.html',
                styleUrls: ['./about-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YyNl":
/*!************************************************************!*\
  !*** ./src/app/layouts/amend-post/amend-post.component.ts ***!
  \************************************************************/
/*! exports provided: AmendPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmendPostComponent", function() { return AmendPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/account */ "gGTi");
/* harmony import */ var src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/account-firebase.service */ "A2T0");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/navbar/navbar.component */ "iDpr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AmendPostComponent {
    constructor(
    // private accountService: AccountService
    accountFirebaseService) {
        this.accountFirebaseService = accountFirebaseService;
        this.account = new src_app_model_account__WEBPACK_IMPORTED_MODULE_1__["Account"]();
    }
    ngOnInit() {
        this.getLinkSocialNetworkById();
    }
    getLinkSocialNetworkById() {
        this.accountFirebaseService.getLinkSocialNetworkById().subscribe((res) => {
            this.account = res;
        });
    }
}
AmendPostComponent.ɵfac = function AmendPostComponent_Factory(t) { return new (t || AmendPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__["AccountFirebaseService"])); };
AmendPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AmendPostComponent, selectors: [["app-amend-post"]], decls: 2, vars: 1, consts: [[3, "urlGithub"]], template: function AmendPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("urlGithub", ctx.account.github);
    } }, directives: [_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYW1lbmQtcG9zdC9hbWVuZC1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AmendPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-amend-post',
                templateUrl: './amend-post.component.html',
                styleUrls: ['./amend-post.component.css']
            }]
    }], function () { return [{ type: src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__["AccountFirebaseService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/navbar/navbar.component */ "iDpr");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/footer/footer.component */ "acaO");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/header/header.component */ "uU1w");
/* harmony import */ var _common_flag_acount_flag_acount_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/flag-acount/flag-acount.component */ "2yTy");
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page/login/login.component */ "phdA");
/* harmony import */ var _page_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page/home-page/home-page.component */ "dpsL");
/* harmony import */ var _page_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page/about-page/about-page.component */ "YHtn");
/* harmony import */ var _page_new_post_page_new_post_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page/new-post-page/new-post-page.component */ "PH3S");
/* harmony import */ var _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page/page-not-found/page-not-found.component */ "2exP");
/* harmony import */ var _page_post_detail_page_post_detail_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page/post-detail-page/post-detail-page.component */ "u+AD");
/* harmony import */ var _page_edit_post_page_edit_post_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./page/edit-post-page/edit-post-page.component */ "rNjr");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/post.service */ "++6F");
/* harmony import */ var _service_date_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/date.service */ "a8YB");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layouts/default/default.component */ "xS3V");
/* harmony import */ var _modules_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/posts/post-list/post-list.component */ "kEN9");
/* harmony import */ var _modules_posts_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/posts/post-add/post-add.component */ "aJmx");
/* harmony import */ var _modules_posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/posts/post-detail/post-detail.component */ "R5or");
/* harmony import */ var _layouts_amend_post_amend_post_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./layouts/amend-post/amend-post.component */ "YyNl");
/* harmony import */ var _modules_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/profile/profile-detail/profile-detail.component */ "8rNN");
/* harmony import */ var _modules_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modules/profile/profile-edit/profile-edit.component */ "/Y5S");
/* harmony import */ var _modules_profile_profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modules/profile/profile-content/profile-content.component */ "8umm");
/* harmony import */ var _modules_profile_profile_detail_profile_timeline_profile_timeline_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modules/profile/profile-detail/profile-timeline/profile-timeline.component */ "9ECJ");
/* harmony import */ var _modules_profile_profile_detail_profile_time_item_profile_time_item_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modules/profile/profile-detail/profile-time-item/profile-time-item.component */ "NTsJ");
/* harmony import */ var _modules_profile_profile_edit_profile_control_edit_profile_control_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./modules/profile/profile-edit/profile-control-edit/profile-control-edit.component */ "tPnv");
/* harmony import */ var _page_edit_about_page_edit_about_page_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./page/edit-about-page/edit-about-page.component */ "Br0M");
/* harmony import */ var _modules_profile_profile_edit_profile_time_item_edit_profile_time_item_edit_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modules/profile/profile-edit/profile-time-item-edit/profile-time-item-edit.component */ "fG4F");
/* harmony import */ var _modules_profile_profile_edit_profile_timeline_edit_profile_timeline_edit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modules/profile/profile-edit/profile-timeline-edit/profile-timeline-edit.component */ "S5Yh");
/* harmony import */ var _common_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./common/star-rating/star-rating.component */ "0qIY");
/* harmony import */ var _modules_profile_profile_edit_skill_edit_skill_edit_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/profile/profile-edit/skill-edit/skill-edit.component */ "SHcG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/router */ "tyNb");
















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        // { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        _service_post_service__WEBPACK_IMPORTED_MODULE_23__["PostService"],
        _service_date_service__WEBPACK_IMPORTED_MODULE_24__["DateService"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forRoot({
                sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].NONE,
                loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
                markedOptions: {
                    provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkedOptions"],
                    useValue: {
                        gfm: true,
                        breaks: false,
                        pedantic: false,
                        smartLists: true,
                        smartypants: false,
                    },
                },
            }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
        _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _common_flag_acount_flag_acount_component__WEBPACK_IMPORTED_MODULE_15__["FlagAcountComponent"],
        _page_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _page_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__["HomePageComponent"],
        _page_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_18__["AboutPageComponent"],
        _page_new_post_page_new_post_page_component__WEBPACK_IMPORTED_MODULE_19__["NewPostPageComponent"],
        _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"],
        _page_post_detail_page_post_detail_page_component__WEBPACK_IMPORTED_MODULE_21__["PostDetailPageComponent"],
        _page_edit_post_page_edit_post_page_component__WEBPACK_IMPORTED_MODULE_22__["EditPostPageComponent"],
        _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_25__["DefaultComponent"],
        _modules_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_26__["PostListComponent"],
        _modules_posts_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_27__["PostAddComponent"],
        _modules_posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_28__["PostDetailComponent"],
        _layouts_amend_post_amend_post_component__WEBPACK_IMPORTED_MODULE_29__["AmendPostComponent"],
        _modules_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_30__["ProfileDetailComponent"],
        _modules_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_31__["ProfileEditComponent"],
        _modules_profile_profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_32__["ProfileContentComponent"],
        _modules_profile_profile_detail_profile_timeline_profile_timeline_component__WEBPACK_IMPORTED_MODULE_33__["ProfileTimelineComponent"],
        _modules_profile_profile_detail_profile_time_item_profile_time_item_component__WEBPACK_IMPORTED_MODULE_34__["ProfileTimeItemComponent"],
        _modules_profile_profile_edit_profile_control_edit_profile_control_edit_component__WEBPACK_IMPORTED_MODULE_35__["ProfileControlEditComponent"],
        _page_edit_about_page_edit_about_page_component__WEBPACK_IMPORTED_MODULE_36__["EditAboutPageComponent"],
        _modules_profile_profile_edit_profile_time_item_edit_profile_time_item_edit_component__WEBPACK_IMPORTED_MODULE_37__["ProfileTimeItemEditComponent"],
        _modules_profile_profile_edit_profile_timeline_edit_profile_timeline_edit_component__WEBPACK_IMPORTED_MODULE_38__["ProfileTimelineEditComponent"],
        _common_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_39__["StarRatingComponent"],
        _modules_profile_profile_edit_skill_edit_skill_edit_component__WEBPACK_IMPORTED_MODULE_40__["SkillEditComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                    _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _common_flag_acount_flag_acount_component__WEBPACK_IMPORTED_MODULE_15__["FlagAcountComponent"],
                    _page_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _page_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__["HomePageComponent"],
                    _page_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_18__["AboutPageComponent"],
                    _page_new_post_page_new_post_page_component__WEBPACK_IMPORTED_MODULE_19__["NewPostPageComponent"],
                    _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"],
                    _page_post_detail_page_post_detail_page_component__WEBPACK_IMPORTED_MODULE_21__["PostDetailPageComponent"],
                    _page_edit_post_page_edit_post_page_component__WEBPACK_IMPORTED_MODULE_22__["EditPostPageComponent"],
                    _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_25__["DefaultComponent"],
                    _modules_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_26__["PostListComponent"],
                    _modules_posts_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_27__["PostAddComponent"],
                    _modules_posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_28__["PostDetailComponent"],
                    _layouts_amend_post_amend_post_component__WEBPACK_IMPORTED_MODULE_29__["AmendPostComponent"],
                    _modules_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_30__["ProfileDetailComponent"],
                    _modules_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_31__["ProfileEditComponent"],
                    _modules_profile_profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_32__["ProfileContentComponent"],
                    _modules_profile_profile_detail_profile_timeline_profile_timeline_component__WEBPACK_IMPORTED_MODULE_33__["ProfileTimelineComponent"],
                    _modules_profile_profile_detail_profile_time_item_profile_time_item_component__WEBPACK_IMPORTED_MODULE_34__["ProfileTimeItemComponent"],
                    _modules_profile_profile_edit_profile_control_edit_profile_control_edit_component__WEBPACK_IMPORTED_MODULE_35__["ProfileControlEditComponent"],
                    _page_edit_about_page_edit_about_page_component__WEBPACK_IMPORTED_MODULE_36__["EditAboutPageComponent"],
                    _modules_profile_profile_edit_profile_time_item_edit_profile_time_item_edit_component__WEBPACK_IMPORTED_MODULE_37__["ProfileTimeItemEditComponent"],
                    _modules_profile_profile_edit_profile_timeline_edit_profile_timeline_edit_component__WEBPACK_IMPORTED_MODULE_38__["ProfileTimelineEditComponent"],
                    _common_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_39__["StarRatingComponent"],
                    _modules_profile_profile_edit_skill_edit_skill_edit_component__WEBPACK_IMPORTED_MODULE_40__["SkillEditComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forRoot({
                        sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].NONE,
                        loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
                        markedOptions: {
                            provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkedOptions"],
                            useValue: {
                                gfm: true,
                                breaks: false,
                                pedantic: false,
                                smartLists: true,
                                smartypants: false,
                            },
                        },
                    }),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                ],
                providers: [
                    // { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
                    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                    _service_post_service__WEBPACK_IMPORTED_MODULE_23__["PostService"],
                    _service_date_service__WEBPACK_IMPORTED_MODULE_24__["DateService"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
                entryComponents: [_modules_profile_profile_edit_profile_control_edit_profile_control_edit_component__WEBPACK_IMPORTED_MODULE_35__["ProfileControlEditComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_modules_profile_profile_detail_profile_timeline_profile_timeline_component__WEBPACK_IMPORTED_MODULE_33__["ProfileTimelineComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaDuotoneIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaLayersComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaLayersTextComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaLayersCounterComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaStackComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaStackItemSizeDirective"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
    _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
    _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
    _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
    _common_flag_acount_flag_acount_component__WEBPACK_IMPORTED_MODULE_15__["FlagAcountComponent"],
    _page_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
    _page_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__["HomePageComponent"],
    _page_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_18__["AboutPageComponent"],
    _page_new_post_page_new_post_page_component__WEBPACK_IMPORTED_MODULE_19__["NewPostPageComponent"],
    _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"],
    _page_post_detail_page_post_detail_page_component__WEBPACK_IMPORTED_MODULE_21__["PostDetailPageComponent"],
    _page_edit_post_page_edit_post_page_component__WEBPACK_IMPORTED_MODULE_22__["EditPostPageComponent"],
    _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_25__["DefaultComponent"],
    _modules_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_26__["PostListComponent"],
    _modules_posts_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_27__["PostAddComponent"],
    _modules_posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_28__["PostDetailComponent"],
    _layouts_amend_post_amend_post_component__WEBPACK_IMPORTED_MODULE_29__["AmendPostComponent"],
    _modules_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_30__["ProfileDetailComponent"],
    _modules_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_31__["ProfileEditComponent"],
    _modules_profile_profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_32__["ProfileContentComponent"],
    _modules_profile_profile_detail_profile_timeline_profile_timeline_component__WEBPACK_IMPORTED_MODULE_33__["ProfileTimelineComponent"],
    _modules_profile_profile_detail_profile_time_item_profile_time_item_component__WEBPACK_IMPORTED_MODULE_34__["ProfileTimeItemComponent"],
    _modules_profile_profile_edit_profile_control_edit_profile_control_edit_component__WEBPACK_IMPORTED_MODULE_35__["ProfileControlEditComponent"],
    _page_edit_about_page_edit_about_page_component__WEBPACK_IMPORTED_MODULE_36__["EditAboutPageComponent"],
    _modules_profile_profile_edit_profile_time_item_edit_profile_time_item_edit_component__WEBPACK_IMPORTED_MODULE_37__["ProfileTimeItemEditComponent"],
    _modules_profile_profile_edit_profile_timeline_edit_profile_timeline_edit_component__WEBPACK_IMPORTED_MODULE_38__["ProfileTimelineEditComponent"],
    _common_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_39__["StarRatingComponent"],
    _modules_profile_profile_edit_skill_edit_skill_edit_component__WEBPACK_IMPORTED_MODULE_40__["SkillEditComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["KeyValuePipe"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["LanguagePipe"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownPipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_modules_profile_profile_edit_profile_timeline_edit_profile_timeline_edit_component__WEBPACK_IMPORTED_MODULE_38__["ProfileTimelineEditComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_42__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaDuotoneIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaLayersComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaLayersTextComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaLayersCounterComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaStackComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaStackItemSizeDirective"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownComponent"], _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
    _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
    _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
    _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
    _common_flag_acount_flag_acount_component__WEBPACK_IMPORTED_MODULE_15__["FlagAcountComponent"],
    _page_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
    _page_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__["HomePageComponent"],
    _page_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_18__["AboutPageComponent"],
    _page_new_post_page_new_post_page_component__WEBPACK_IMPORTED_MODULE_19__["NewPostPageComponent"],
    _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"],
    _page_post_detail_page_post_detail_page_component__WEBPACK_IMPORTED_MODULE_21__["PostDetailPageComponent"],
    _page_edit_post_page_edit_post_page_component__WEBPACK_IMPORTED_MODULE_22__["EditPostPageComponent"],
    _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_25__["DefaultComponent"],
    _modules_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_26__["PostListComponent"],
    _modules_posts_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_27__["PostAddComponent"],
    _modules_posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_28__["PostDetailComponent"],
    _layouts_amend_post_amend_post_component__WEBPACK_IMPORTED_MODULE_29__["AmendPostComponent"],
    _modules_profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_30__["ProfileDetailComponent"],
    _modules_profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_31__["ProfileEditComponent"],
    _modules_profile_profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_32__["ProfileContentComponent"],
    _modules_profile_profile_detail_profile_timeline_profile_timeline_component__WEBPACK_IMPORTED_MODULE_33__["ProfileTimelineComponent"],
    _modules_profile_profile_detail_profile_time_item_profile_time_item_component__WEBPACK_IMPORTED_MODULE_34__["ProfileTimeItemComponent"],
    _modules_profile_profile_edit_profile_control_edit_profile_control_edit_component__WEBPACK_IMPORTED_MODULE_35__["ProfileControlEditComponent"],
    _page_edit_about_page_edit_about_page_component__WEBPACK_IMPORTED_MODULE_36__["EditAboutPageComponent"],
    _modules_profile_profile_edit_profile_time_item_edit_profile_time_item_edit_component__WEBPACK_IMPORTED_MODULE_37__["ProfileTimeItemEditComponent"],
    _modules_profile_profile_edit_profile_timeline_edit_profile_timeline_edit_component__WEBPACK_IMPORTED_MODULE_38__["ProfileTimelineEditComponent"],
    _common_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_39__["StarRatingComponent"],
    _modules_profile_profile_edit_skill_edit_skill_edit_component__WEBPACK_IMPORTED_MODULE_40__["SkillEditComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_41__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_41__["KeyValuePipe"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["LanguagePipe"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownPipe"]]);


/***/ }),

/***/ "a8YB":
/*!*****************************************!*\
  !*** ./src/app/service/date.service.ts ***!
  \*****************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DateService {
    constructor() { }
    getDayNow() {
        return new Date();
    }
    convertToString(date) {
        const monthLong = date.toLocaleString('default', { month: 'long' });
        return monthLong + ' ' + date.getDate() + ' ,' + date.getFullYear();
    }
}
DateService.ɵfac = function DateService_Factory(t) { return new (t || DateService)(); };
DateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateService, factory: DateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "aJmx":
/*!**************************************************************!*\
  !*** ./src/app/modules/posts/post-add/post-add.component.ts ***!
  \**************************************************************/
/*! exports provided: PostAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAddComponent", function() { return PostAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var src_app_model_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/account */ "gGTi");
/* harmony import */ var src_app_model_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/post */ "S19W");
/* harmony import */ var src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/post-firebase.service */ "1+ss");
/* harmony import */ var src_app_service_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/date.service */ "a8YB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/account-firebase.service */ "A2T0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-markdown */ "lR5k");














function PostAddComponent_div_7_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Heading required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostAddComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostAddComponent_div_7_p_1_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formPost.get("heading").errors == null ? null : ctx_r0.formPost.get("heading").errors.required);
} }
function PostAddComponent_div_10_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subheading required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostAddComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostAddComponent_div_10_p_1_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formPost.get("heading").errors == null ? null : ctx_r1.formPost.get("heading").errors.required);
} }
function PostAddComponent_div_15_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Url image required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostAddComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostAddComponent_div_15_p_1_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formPost.get("heading").errors == null ? null : ctx_r2.formPost.get("heading").errors.required);
} }
function PostAddComponent_div_21_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Content required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostAddComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostAddComponent_div_21_p_1_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formPost.get("content").errors == null ? null : ctx_r4.formPost.get("content").errors.required);
} }
class PostAddComponent {
    constructor(fb, 
    // private postService: PostService,
    postFirebaseService, dateService, route, router, 
    // private accountService: AccountService
    accountFirebaseService) {
        this.fb = fb;
        this.postFirebaseService = postFirebaseService;
        this.dateService = dateService;
        this.route = route;
        this.router = router;
        this.accountFirebaseService = accountFirebaseService;
        this.faMarkdown = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMarkdown"];
        this.postPreview = '';
    }
    ngOnChanges() {
        this.currentAccount = this.accountFirebaseService.getCurrentAccountValue;
        this.formPost = this.fb.group({
            heading: [this.flagEdit ? this.postEditting.heading : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            subHeading: [this.flagEdit ? this.postEditting.subHeading : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            urlImage: [this.flagEdit ? this.postEditting.urlImage : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            content: [this.flagEdit ? this.postEditting.content : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        // console.log(this.formPost);
        this.postPreview = this.formPost.get('content').value;
    }
    ngOnInit() {
        this.currentAccount = this.accountFirebaseService.getCurrentAccountValue;
    }
    submitPost() {
        if (!this.currentAccount) {
            return;
        }
        const post = new src_app_model_post__WEBPACK_IMPORTED_MODULE_4__["Post"]();
        post.heading = this.formPost.get('heading').value;
        post.subHeading = this.formPost.get('subHeading').value;
        post.content = this.formPost.get('content').value;
        post.urlImage = this.formPost.get('urlImage').value;
        const accountDTO = new src_app_model_account__WEBPACK_IMPORTED_MODULE_3__["Account"]();
        accountDTO.username = this.currentAccount.username;
        post.accountDTO = accountDTO;
        if (this.flagEdit) {
            post.id = this.postEditting.id;
            post.dateCreate = this.postEditting.dateCreate;
            this.updatePost(post);
        }
        else {
            post.dateCreate = this.dateService.getDayNow();
            console.log('INSERT', post);
            this.postFirebaseService.addPost(post).subscribe({
                next: (next) => {
                    console.log(next);
                },
                error: (err) => {
                    console.error(err);
                },
                complete: () => {
                    console.log(post);
                    this.router.navigateByUrl('/duongnh/home');
                }
            });
        }
    }
    updatePost(post) {
        this.postFirebaseService.updatePost(post).subscribe({
            next: (next) => {
                console.log('ADD POST: ' + next);
            },
            error: (err) => {
                console.error('ADD POST: ', err);
                // if (err.status === 401) {
                //   this.updatePost(post);
                // }
            },
            complete: () => {
                console.log(post);
                this.router.navigateByUrl(`/duongnh/post/detail/${this.postEditting.id}`);
            }
        });
    }
    deletePost() {
        if (!this.currentAccount) {
            return;
        }
        const idDelete = this.postEditting.id;
        this.postFirebaseService.deletePost(idDelete).subscribe(post => {
            console.log(post);
            this.router.navigateByUrl('/duongnh/home');
        });
    }
    resizeInput(element) {
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px';
        this.postPreview = this.formPost.get('content').value;
    }
}
PostAddComponent.ɵfac = function PostAddComponent_Factory(t) { return new (t || PostAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_5__["PostFirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_8__["AccountFirebaseService"])); };
PostAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostAddComponent, selectors: [["app-post-add"]], inputs: { postEditting: "postEditting", flagEdit: "flagEdit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 34, vars: 11, consts: [[1, "full-background"], [1, "form-post"], [3, "formGroup", "ngSubmit"], [1, "title-form"], ["type", "text", "formControlName", "heading", "placeholder", "Post heading", 1, "input-text"], [4, "ngIf"], ["type", "text", "formControlName", "subHeading", "placeholder", "Post subheading", 1, "input-text"], ["type", "text", "formControlName", "urlImage", "placeholder", "Post background image (enter a URL)", 1, "input-text"], [1, "note-input"], ["formControlName", "content", "id", "", "cols", "100", "placeholder", "Post body text (markdown supported)", 1, "input-text", "input-text-area", 3, "keyup"], ["contentInput", ""], [2, "font-size", "12px", 3, "icon"], ["type", "submit", 1, "btn-post", 3, "disabled", "hidden"], [1, "post-preview"], ["markdown", "", 3, "data"], ["type", "button", 1, "btn-post", "btn-post-delete", 3, "hidden", "click"], ["class", "error-input", 4, "ngIf"], [1, "error-input"]], template: function PostAddComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostAddComponent_Template_form_ngSubmit_2_listener() { return ctx.submitPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Post Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostAddComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostAddComponent_div_10_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Use an image URL (ex. https://source.unsplash.com/WLUHO9A_xik/1600x900)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PostAddComponent_div_15_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PostAddComponent_Template_textarea_keyup_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.resizeInput(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Markdown supported ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PostAddComponent_div_21_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Post Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostAddComponent_Template_button_click_32_listener() { return ctx.deletePost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "DELETE POST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formPost.get("heading").errors && ctx.formPost.get("heading").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formPost.get("subHeading").errors && ctx.formPost.get("subHeading").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formPost.get("urlImage").errors && ctx.formPost.get("urlImage").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faMarkdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formPost.get("content").errors && ctx.formPost.get("content").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formPost.invalid)("hidden", !ctx.currentAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.flagEdit ? "UPDATE POST" : "CREATE POST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.postPreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.flagEdit || !ctx.currentAccount);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkdownComponent"]], styles: [".title-form[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n}\r\n\r\n.form-post[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] {\r\n    margin-top: 150px;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    color: white;\r\n}\r\n\r\n.note-input[_ngcontent-%COMP%] {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: small;\r\n    color: gray;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.input-text-area[_ngcontent-%COMP%] {\r\n    \r\n    resize: horizontal;\r\n    overflow: hidden;\r\n}\r\n\r\n.error-input[_ngcontent-%COMP%] {\r\n    color: #dc3545;\r\n    font-weight: normal;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n.post-preview[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin: 10px 0;\r\n    padding: 10px;\r\n    line-height: 20px;\r\n    min-height: 50px;\r\n    color: black;\r\n    background-color: #fff;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .form-post[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] {\r\n        margin-left: 10%;\r\n        margin-right: 10%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0LWFkZC9wb3N0LWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdC1hZGQvcG9zdC1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1mb3JtIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5mb3JtLXBvc3Q+Zm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5vdGUtaW5wdXQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtdGV4dC1hcmVhIHtcclxuICAgIC8qIGhlaWdodDogZml0LWNvbnRlbnQ7ICovXHJcbiAgICByZXNpemU6IGhvcml6b250YWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZXJyb3ItaW5wdXQge1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcbi5wb3N0LXByZXZpZXcge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmZvcm0tcG9zdD5mb3JtIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-add',
                templateUrl: './post-add.component.html',
                styleUrls: ['./post-add.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_5__["PostFirebaseService"] }, { type: src_app_service_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_8__["AccountFirebaseService"] }]; }, { postEditting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flagEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "acaO":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





class FooterComponent {
    constructor() {
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], inputs: { urlTwitter: "urlTwitter", urlFacebook: "urlFacebook", urlGithub: "urlGithub" }, decls: 29, vars: 10, consts: [[1, "footer"], [1, "break-footer"], [1, "quickstart"], [1, "link", "left"], [3, "routerLink"], ["target", "_blank", 3, "href"], [1, "icon-footer", 3, "icon"], [1, "link", "right"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Copyright \u00A9 Blog Website 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/duongnh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/duongnh/about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.urlTwitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTwitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.urlFacebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFacebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.urlGithub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/duongnh/post/new");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".footer[_ngcontent-%COMP%] {\r\n    height: 170px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.break-footer[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .quickstart[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.quickstart[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  margin: 0 20px;\r\n}\r\n\r\n.quickstart[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{\r\n\r\n}\r\n\r\n.quickstart[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    \r\n    margin: 0px;\r\n    padding: 10px 0px;\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.quickstart[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin: 0px 10px;\r\n}\r\n\r\n.quickstart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-bottom: 0px;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-family: 'Lora,Times New Roman,serif';\r\n}\r\n\r\n.icon-footer[_ngcontent-%COMP%] {\r\n    font-size: 48px;\r\n    color: black;\r\n    transition: all 0.5s;\r\n}\r\n\r\n.icon-footer[_ngcontent-%COMP%]:hover {\r\n    color: #0085a1;\r\n    transition: all 0.5s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTs7QUFFQTs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5icmVhay1mb290ZXIge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4uZm9vdGVyIC5xdWlja3N0YXJ0e1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnF1aWNrc3RhcnQgLmxpbmsgbGl7XHJcbiAgbWFyZ2luOiAwIDIwcHg7XHJcbn1cclxuLnF1aWNrc3RhcnQgIC5sZWZ0e1xyXG5cclxufVxyXG4ucXVpY2tzdGFydCB1bCB7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnF1aWNrc3RhcnQgdWw+bGl7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5xdWlja3N0YXJ0IHAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LWZhbWlseTogJ0xvcmEsVGltZXMgTmV3IFJvbWFuLHNlcmlmJztcclxufVxyXG5cclxuLmljb24tZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4uaWNvbi1mb290ZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDg1YTE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, { urlTwitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], urlFacebook: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], urlGithub: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "dpsL":
/*!*******************************************************!*\
  !*** ./src/app/page/home-page/home-page.component.ts ***!
  \*******************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/header/header.component */ "uU1w");
/* harmony import */ var _modules_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/posts/post-list/post-list.component */ "kEN9");




class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 2, vars: 1, consts: [["heading", "Clean Blog", "subHeading", "Blog Theme by HTML", "dateCreate", "", 3, "flagHome"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-list");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flagHome", true);
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _modules_posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__["PostListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fG4F":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/profile/profile-edit/profile-time-item-edit/profile-time-item-edit.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProfileTimeItemEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTimeItemEditComponent", function() { return ProfileTimeItemEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/form.service */ "9F8z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _profile_control_edit_profile_control_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-control-edit/profile-control-edit.component */ "tPnv");






function ProfileTimeItemEditComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProfileTimeItemEditComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProfileTimeItemEditComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WEB APP BLOG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AUG 2020 - TO PRESENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProfileTimeItemEditComponent_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 19);
} }
function ProfileTimeItemEditComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GPA: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileTimeItemEditComponent {
    constructor(fb, formService) {
        this.fb = fb;
        this.formService = formService;
        // isShowControl: boolean;
        this.itemFormGroup = {
            formGroup: undefined,
            kind: 'undefined',
            index: -1
        };
    }
    ngOnChanges() {
        this.maxIndex = this.parentComponent.listFormByKind.formArray.length;
        this.itemFormGroup = {
            kind: 'Education',
            formGroup: this.itemEducationForm,
            index: this.index
        };
        if (this.itemWorkExperienceForm) {
            this.itemFormGroup = {
                kind: 'WorkExperience',
                formGroup: this.itemWorkExperienceForm,
                index: this.index
            };
        }
        console.log('INIT ITEM EDIT', this.itemFormGroup);
    }
    ngOnInit() {
    }
    addItemForm(kindTimeItemForm) {
        console.log('Value add time item', kindTimeItemForm);
        const formArray = this.parentComponent.listFormByKind.formArray;
        let itemForm;
        if (kindTimeItemForm.kind === 'WorkExperience') {
            itemForm = this.formService.createWorkExperienceFormGroup(null);
        }
        else if (kindTimeItemForm.kind === 'Education') {
            itemForm = this.formService.createEducationFormGroup(null);
        }
        const formGroupClone = kindTimeItemForm.formGroup.getRawValue();
        itemForm.patchValue(formGroupClone);
        const idFormControl = itemForm.get('id');
        idFormControl.setValue(null);
        if (kindTimeItemForm.kind === 'WorkExperience') {
            const companyOrAppNameFormControl = itemForm.get('companyOrAppName');
            companyOrAppNameFormControl.setValue(formGroupClone.companyOrAppName + ' copy');
        }
        else if (kindTimeItemForm.kind === 'Education') {
            const nameFormControl = itemForm.get('name');
            nameFormControl.setValue(formGroupClone.name + ' copy');
        }
        // formArray.push(weForm);
        formArray.insert(kindTimeItemForm.index + 1, itemForm);
        const indexStart = kindTimeItemForm.index;
        const sortIndexStart = itemForm.get('sortIndex').value + 1;
        this.updateSortIndex(indexStart, sortIndexStart);
        console.log('FORM ARRAY: ', formArray.getRawValue());
    }
    deleteItemForm(index) {
        console.log('INDEX DELETE: ' + index);
        const formArray = this.parentComponent.listFormByKind.formArray;
        formArray.removeAt(index);
    }
    moveItemForm(indexClass) {
        console.log('MOVE UP: ', indexClass);
        this.replaceTwoControl(indexClass.oldIndex, indexClass.newIndex);
        console.log('FORM ARRAY: ', this.parentComponent.listFormByKind);
    }
    replaceTwoControl(oldIndex, newIndex) {
        const formArray = this.parentComponent.listFormByKind.formArray;
        if (newIndex !== oldIndex) {
            const controlName = 'sortIndex';
            const oldItemFormGroup = formArray.at(oldIndex);
            const sortIndexOldControl = oldItemFormGroup.get(controlName);
            const sortIndexOld = sortIndexOldControl.value;
            const newItemFormGroup = formArray.at(newIndex);
            const sortIndexNewControl = newItemFormGroup.get(controlName);
            const sortIndexNew = sortIndexNewControl.value;
            sortIndexOldControl.setValue(sortIndexNew, Number);
            sortIndexNewControl.setValue(sortIndexOld, Number);
            // const dataOldFormGroupClone = oldItemFormGroup.getRawValue();
            // const oldFormGroupClone = this.fb.group(dataOldFormGroupClone);
            // const dataNewFormGroupClone = newItemFormGroup.getRawValue();
            // const newFormGroupClone = this.fb.group(dataNewFormGroupClone);
            formArray.insert(oldIndex, newItemFormGroup);
            formArray.removeAt(oldIndex + 1);
            formArray.insert(newIndex, oldItemFormGroup);
            formArray.removeAt(newIndex + 1);
        }
    }
    updateSortIndex(indexStart, sortIndexStart) {
        console.log('INDEX: ', indexStart, sortIndexStart);
        const formArray = this.parentComponent.listFormByKind.formArray;
        let sortIndex = sortIndexStart;
        for (let i = indexStart; i >= 0; i--) {
            console.log('INDEX LOOP: ', i, sortIndex);
            const formGroup = formArray.at(i);
            formGroup.get('sortIndex').setValue(sortIndex, Number);
            sortIndex++;
        }
    }
}
ProfileTimeItemEditComponent.ɵfac = function ProfileTimeItemEditComponent_Factory(t) { return new (t || ProfileTimeItemEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"])); };
ProfileTimeItemEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileTimeItemEditComponent, selectors: [["app-profile-time-item-edit"]], inputs: { itemEducationForm: "itemEducationForm", itemWorkExperienceForm: "itemWorkExperienceForm", isEven: "isEven", index: "index", parentComponent: "parentComponent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 11, consts: [[3, "formGroup"], [1, "content"], [3, "ngSwitch"], [1, "head"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["type", "text", "formControlName", "titleOrPosition", 4, "ngIf"], [1, "details"], ["type", "text", "formControlName", "description", "placeholder", "Description"], ["class", "wrap-gpa", 4, "ngIf"], [3, "item", "maxIndex", "addItemForm", "deleteItemForm", "moveUpItemForm", "moveDownItemForm"], ["type", "text", "formControlName", "name", 1, "__name"], [1, "wrap-date"], ["type", "date", "formControlName", "dateStart", 1, "__time"], [1, "sperator-date"], ["type", "date", "formControlName", "dateEnd", 1, "__time"], ["type", "text", "formControlName", "companyOrAppName", 1, "__name"], [1, "__name"], [1, "__time"], ["type", "text", "formControlName", "titleOrPosition"], [1, "wrap-gpa"], ["type", "number", "formControlName", "gpa"]], template: function ProfileTimeItemEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileTimeItemEditComponent_ng_container_5_Template, 7, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileTimeItemEditComponent_ng_container_6_Template, 7, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileTimeItemEditComponent_ng_container_7_Template, 5, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileTimeItemEditComponent_input_8_Template, 1, 0, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileTimeItemEditComponent_div_11_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-profile-control-edit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addItemForm", function ProfileTimeItemEditComponent_Template_app_profile_control_edit_addItemForm_12_listener($event) { return ctx.addItemForm($event); })("deleteItemForm", function ProfileTimeItemEditComponent_Template_app_profile_control_edit_deleteItemForm_12_listener($event) { return ctx.deleteItemForm($event); })("moveUpItemForm", function ProfileTimeItemEditComponent_Template_app_profile_control_edit_moveUpItemForm_12_listener($event) { return ctx.moveItemForm($event); })("moveDownItemForm", function ProfileTimeItemEditComponent_Template_app_profile_control_edit_moveDownItemForm_12_listener($event) { return ctx.moveItemForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.itemFormGroup.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx.isEven ? "left" : "right", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.itemFormGroup.kind);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "WorkExperience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemFormGroup.kind === "WorkExperience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemFormGroup.kind === "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.itemFormGroup)("maxIndex", ctx.maxIndex);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _profile_control_edit_profile_control_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProfileControlEditComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".head[_ngcontent-%COMP%]{\r\n    display: block !important;\r\n}\r\n.details[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.head[_ngcontent-%COMP%]   .__name[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-weight: 800;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n}\r\n.head[_ngcontent-%COMP%]   .__name[_ngcontent-%COMP%]:focus{\r\n    font-weight: normal;\r\n}\r\n.wrap-date[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.sperator-date[_ngcontent-%COMP%]{\r\n    margin:0 5px;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    \r\n    word-wrap: break-word;\r\n    width: 100%;\r\n\r\n}\r\n.wrap-gpa[_ngcontent-%COMP%], .wrap-gpa[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    font-style: italic;\r\n    font-size: 12px;\r\n}\r\ntextarea[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 100%;\r\n    min-height: 200px;\r\n}\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{\r\n    background-color: #df7861;\r\n    border: 1px #df7861 solid;\r\n    outline: none;\r\n    transition: all 0.5s ease;\r\n}\r\ninput[_ngcontent-%COMP%]:hover, textarea[_ngcontent-%COMP%]:hover{\r\n    border: 1px solid #514f50;\r\n}\r\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{\r\n    border: 1px solid #514f50;\r\n    box-shadow: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZWRpdC9wcm9maWxlLXRpbWUtaXRlbS1lZGl0L3Byb2ZpbGUtdGltZS1pdGVtLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0VBQW9FO0FBQ3hFO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0M7SUFDRyxhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2ZpbGUvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtdGltZS1pdGVtLWVkaXQvcHJvZmlsZS10aW1lLWl0ZW0tZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWR7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmhlYWQgLl9fbmFtZXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5oZWFkIC5fX25hbWU6Zm9jdXN7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi53cmFwLWRhdGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zcGVyYXRvci1kYXRle1xyXG4gICAgbWFyZ2luOjAgNXB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuLndyYXAtZ3BhLCAud3JhcC1ncGEgaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiB0ZXh0YXJlYXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcbmlucHV0LCB0ZXh0YXJlYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZjc4NjE7XHJcbiAgICBib3JkZXI6IDFweCAjZGY3ODYxIHNvbGlkO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbn1cclxuaW5wdXQ6aG92ZXIsIHRleHRhcmVhOmhvdmVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUxNGY1MDtcclxufVxyXG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXN7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTE0ZjUwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4iXX0= */", ".container[_ngcontent-%COMP%] {\r\n    padding: 5px 30px;\r\n    margin: 0;\r\n    position: relative;\r\n    background-color: inherit;\r\n    \r\n    width: 45%;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    right: -15px;\r\n    background-color: #ffffff;\r\n    border: 4px solid #FF9F55;\r\n    top: 15px;\r\n    border-radius: 50%;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n\r\n.left[_ngcontent-%COMP%] {\r\n    \r\n    left: -26px;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n}\r\n\r\n\r\n\r\n.left[_ngcontent-%COMP%]::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 18px;\r\n    width: 0;\r\n    z-index: 1;\r\n    right: 20px;\r\n    border: medium solid #df7861;\r\n    border-width: 10px 0 10px 10px;\r\n    border-color: transparent transparent transparent #df7861;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%]::before {\r\n    content: \" \";\r\n    height: 0;\r\n    position: absolute;\r\n    top: 18px;\r\n    width: 0;\r\n    z-index: 1;\r\n    left: 20px;\r\n    border: medium solid #df7861;\r\n    border-width: 10px 10px 10px 0;\r\n    border-color: transparent #df7861 transparent transparent;\r\n}\r\n\r\n\r\n\r\n.right[_ngcontent-%COMP%]::after {\r\n    left: -16px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n    \r\n    .timeline[_ngcontent-%COMP%]::after {\r\n        left: 31px;\r\n    }\r\n    \r\n    .container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        padding-left: 70px;\r\n        padding-right: 25px;\r\n    }\r\n    \r\n    .container[_ngcontent-%COMP%]::before {\r\n        left: 60px;\r\n        border: medium solid #df7861;\r\n        border-width: 10px 10px 10px 0;\r\n        border-color: transparent #df7861 transparent transparent;\r\n    }\r\n    \r\n    .left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after {\r\n        left: 15px;\r\n    }\r\n    \r\n    .right[_ngcontent-%COMP%] {\r\n        left: 0%;\r\n    }\r\n}\r\n\r\n\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    font-weight: normal;\r\n    padding: 10px 15px;\r\n    background-color: #df7861;\r\n    position: relative;\r\n    border-radius: 6px;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]   .__name[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n\r\n.head[_ngcontent-%COMP%]   .__time[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-style: italic;\r\n    font-size:smaller;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZGV0YWlsL3Byb2ZpbGUtdGltZS1pdGVtL3Byb2ZpbGUtdGltZS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDZCQUE2Qjs7QUFFN0I7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBLG9DQUFvQzs7QUFFcEM7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBLHFDQUFxQzs7QUFFckM7SUFDSSxTQUFTO0FBQ2I7O0FBRUEsc0RBQXNEOztBQUV0RDtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLHlEQUF5RDtBQUM3RDs7QUFFQSxzREFBc0Q7O0FBRXREO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIseURBQXlEO0FBQzdEOztBQUVBLG9EQUFvRDs7QUFFcEQ7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsd0VBQXdFOztBQUV4RTtJQUNJLG1DQUFtQztJQUNuQztRQUNJLFVBQVU7SUFDZDtJQUNBLDBCQUEwQjtJQUMxQjtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0lBQ0EscURBQXFEO0lBQ3JEO1FBQ0ksVUFBVTtRQUNWLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIseURBQXlEO0lBQzdEO0lBQ0EsK0NBQStDO0lBQy9DO1FBQ0ksVUFBVTtJQUNkO0lBQ0Esd0RBQXdEO0lBQ3hEO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLWRldGFpbC9wcm9maWxlLXRpbWUtaXRlbS9wcm9maWxlLXRpbWUtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIENvbnRhaW5lciBhcm91bmQgY29udGVudCAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1cHggMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAvKiB3aWR0aDogMzclOyAqL1xyXG4gICAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuLyogVGhlIGNpcmNsZXMgb24gdGhlIHRpbWVsaW5lICovXHJcblxyXG4uY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNGRjlGNTU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXHJcblxyXG4ubGVmdCB7XHJcbiAgICAvKiBsZWZ0OiA1MnB4OyAqL1xyXG4gICAgbGVmdDogLTI2cHg7XHJcbn1cclxuXHJcbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIHJpZ2h0ICovXHJcblxyXG4ucmlnaHQge1xyXG4gICAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4vKiBBZGQgYXJyb3dzIHRvIHRoZSBsZWZ0IGNvbnRhaW5lciAocG9pbnRpbmcgcmlnaHQpICovXHJcblxyXG4ubGVmdDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZGY3ODYxO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZGY3ODYxO1xyXG59XHJcblxyXG4vKiBBZGQgYXJyb3dzIHRvIHRoZSByaWdodCBjb250YWluZXIgKHBvaW50aW5nIGxlZnQpICovXHJcblxyXG4ucmlnaHQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMThweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZGY3ODYxO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZGY3ODYxIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBGaXggdGhlIGNpcmNsZSBmb3IgY29udGFpbmVycyBvbiB0aGUgcmlnaHQgc2lkZSAqL1xyXG5cclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgICBsZWZ0OiAtMTZweDtcclxufVxyXG5cclxuLyogTWVkaWEgcXVlcmllcyAtIFJlc3BvbnNpdmUgdGltZWxpbmUgb24gc2NyZWVucyBsZXNzIHRoYW4gNjAwcHggd2lkZSAqL1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xyXG4gICAgLnRpbWVsaW5lOjphZnRlciB7XHJcbiAgICAgICAgbGVmdDogMzFweDtcclxuICAgIH1cclxuICAgIC8qIEZ1bGwtd2lkdGggY29udGFpbmVycyAqL1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCBhbGwgYXJyb3dzIGFyZSBwb2ludGluZyBsZWZ0d2FyZHMgKi9cclxuICAgIC5jb250YWluZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgbGVmdDogNjBweDtcclxuICAgICAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjZGY3ODYxO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDEwcHggMDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNkZjc4NjEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAvKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cclxuICAgIC5sZWZ0OjphZnRlciwgLnJpZ2h0OjphZnRlciB7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIC8qIE1ha2UgYWxsIHJpZ2h0IGNvbnRhaW5lcnMgYmVoYXZlIGxpa2UgdGhlIGxlZnQgb25lcyAqL1xyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLyogVGhlIGFjdHVhbCBjb250ZW50ICovXHJcblxyXG4uY29udGVudCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmNzg2MTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmhlYWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5oZWFkIC5fX25hbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5oZWFkIC5fX3RpbWV7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmRldGFpbHMgcHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTpzbWFsbGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileTimeItemEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-time-item-edit',
                templateUrl: './profile-time-item-edit.component.html',
                styleUrls: ['./profile-time-item-edit.component.css', '../../profile-detail/profile-time-item/profile-time-item.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_service_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"] }]; }, { itemEducationForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemWorkExperienceForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEven: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parentComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fyVs":
/*!********************************************!*\
  !*** ./src/app/interceptors/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/firebase-cloud-firestore/account-firebase.service */ "A2T0");




class AuthGuard {
    constructor(router, 
    // private accountService: AccountService
    accountFirebaseService) {
        this.router = router;
        this.accountFirebaseService = accountFirebaseService;
    }
    canActivate(route, state) {
        const account = this.accountFirebaseService.getCurrentAccountValue;
        if (account) {
            return true;
        }
        this.router.navigateByUrl('/login');
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__["AccountFirebaseService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__["AccountFirebaseService"] }]; }, null); })();


/***/ }),

/***/ "gGTi":
/*!**********************************!*\
  !*** ./src/app/model/account.ts ***!
  \**********************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
class Account {
    constructor() { }
}


/***/ }),

/***/ "iDpr":
/*!***************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/account-firebase.service */ "A2T0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");








function NavbarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editPost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EDIT POST");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EDIT PROFILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(route, router, 
    // private accountService: AccountService
    accountFirebaseService) {
        this.route = route;
        this.router = router;
        this.accountFirebaseService = accountFirebaseService;
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
    }
    ngOnInit() {
        this.checkAtPageDetailPost();
    }
    checkAtPageDetailPost() {
        // console.log('ROUTE: ', this.route);
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                const href = evt.url;
                const currentAccount = this.accountFirebaseService.getCurrentAccountValue;
                console.log('href and current: ', href, currentAccount);
                if (href.includes('detail') && currentAccount) {
                    this.showEditPost = true;
                }
                if (href.includes('about') && currentAccount) {
                    this.showEditProfile = true;
                }
            }
        });
    }
    editPost() {
        const url = this.router.url;
        const indexDetail = url.lastIndexOf('/');
        const idPost = +url.substring(indexDetail + 1);
        this.router.navigateByUrl(`/duongnh/post/edit/${idPost}`);
    }
    editProfile() {
        this.router.navigateByUrl(`/duongnh/about/edit`);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_3__["AccountFirebaseService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { urlGithub: "urlGithub" }, decls: 18, vars: 4, consts: [[1, "navbar"], ["href", "", 1, "title-blog"], [1, "menu-bar"], ["routerLink", "/duongnh/home"], ["routerLink", "/duongnh/about"], [4, "ngIf"], ["target", "_blank", 3, "href"], [2, "font-size", "34px", 3, "icon"], [1, "btn-post", "new-post"], ["routerLink", "/duongnh/post/new"], [3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Your Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_li_10_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_li_11_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "NEW POST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEditPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEditProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.urlGithub, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 5;\r\n    display: flex;\r\n    margin: 0px 15%;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .title-blog[_ngcontent-%COMP%] {\r\n    \r\n    margin: 0px;\r\n    padding: 20px;\r\n    font-weight: 800;\r\n    font-size: large;\r\n    white-space: nowrap;\r\n    letter-spacing: 0.3px;\r\n    color: white;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    text-decoration: none;\r\n    flex-grow: 8;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%] {\r\n    flex-grow: 2;\r\n    \r\n    \r\n    text-decoration: none;\r\n    list-style: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n    margin: 0px 5px;\r\n    padding: 0px 0px;\r\n    align-self: stretch;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    padding: 0px 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    font-weight: 800;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n    color: white;\r\n    font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    text-decoration: none;\r\n    \r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   .menu-bar[_ngcontent-%COMP%]   .new-post[_ngcontent-%COMP%] {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 800px) {\r\n    .navbar[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osb0VBQW9FO0lBQ3BFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG9FQUFvRTtJQUNwRSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBR0E7Ozs7R0FJRzs7QUFFSDtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMHB4IDE1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBqdXN0aWZ5LXNlbGY6IDsgKi9cclxufVxyXG5cclxuLm5hdmJhciAudGl0bGUtYmxvZyB7XHJcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZsZXgtZ3JvdzogODtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ubmF2YmFyIC5tZW51LWJhciB7XHJcbiAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMjAwcHg7ICovXHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5uYXZiYXIgLm1lbnUtYmFyPmxpIHtcclxuICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG59XHJcblxyXG4ubmF2YmFyIC5tZW51LWJhcj5saT5hIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciAubWVudS1iYXIgLm5ldy1wb3N0IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuXHJcbi8qIFxyXG4ubmF2YmFyIC5tZW51LWJhcj5saTpsYXN0LWNoaWxkIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE2NjcyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_3__["AccountFirebaseService"] }]; }, { urlGithub: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "kEN9":
/*!****************************************************************!*\
  !*** ./src/app/modules/posts/post-list/post-list.component.ts ***!
  \****************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/post-firebase.service */ "1+ss");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function PostListComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/duongnh/post/detail/", post_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.heading, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.subHeading, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, post_r1.dateCreate, "MMMM d, y"), " ");
} }
class PostListComponent {
    constructor(
    // private postService: PostService,
    postFirebaseService) {
        this.postFirebaseService = postFirebaseService;
    }
    ngOnInit() {
        this.getAllPost();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            try {
                (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
                (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
                (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
                (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
            }
            catch (e) {
                console.error("ads", e);
            }
        }, 900);
    }
    getAllPost() {
        // let arrPost: Array<Post> = null;
        this.postFirebaseService.getAllPost().subscribe(responsePost => {
            this.posts = responsePost;
            // this.posts = Array.from(this.posts).reverse();
        }, error => {
            console.log(error);
            this.posts = [];
        });
    }
}
PostListComponent.ɵfac = function PostListComponent_Factory(t) { return new (t || PostListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_1__["PostFirebaseService"])); };
PostListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostListComponent, selectors: [["app-post-list"]], decls: 13, vars: 1, consts: [[1, "body-blog", "body-post-list", "font-style"], [1, "cus-ads-list"], [1, "cus-ads-item", "text-center"], ["data-ad-client", "ca-pub-id", "data-ad-slot", "ad-slot-id", "data-full-width-responsive", "true", 1, "adsbygoogle", "ads_resp", 2, "display", "inline-block"], [1, "body-post"], [4, "ngFor", "ngForOf"], [1, "post-item", 3, "routerLink"], [1, "title-post"], [1, "subtitle-post"], [1, "date-post"]], template: function PostListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ins", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ins", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostListComponent_ng_container_7_Template, 9, 7, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ins", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ins", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".body-post-list[_ngcontent-%COMP%] {\r\n    margin: 0px 0px;\r\n    padding-top: 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.body-post[_ngcontent-%COMP%] {\r\n    flex: 50%;\r\n}\r\n\r\n.post-item[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 15px;\r\n    margin-bottom: 25px;\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.post-item[_ngcontent-%COMP%]:hover {\r\n    color: #0085a1;\r\n    transition: all 0.2s;\r\n}\r\n\r\n.title-post[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n    font-weight: 800;\r\n    line-height: 1.2;\r\n    box-sizing: border-box;\r\n    transition: all 0.2s;\r\n}\r\n\r\n.subtitle-post[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    margin-bottom: 20px;\r\n    font-weight: 300;\r\n    font-size: 1.75rem;\r\n    line-height: 1;\r\n    box-sizing: border-box;\r\n    color: rgb(80, 79, 79);\r\n}\r\n\r\n.date-post[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    color: gray;\r\n    font-size: 18px;\r\n    font-style: italic;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDRDQUE0QztBQUNoRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHktcG9zdC1saXN0IHtcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmJvZHktcG9zdCB7XHJcbiAgICBmbGV4OiA1MCU7XHJcbn1cclxuXHJcbi5wb3N0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBvc3QtaXRlbTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwODVhMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcbi50aXRsZS1wb3N0IHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uc3VidGl0bGUtcG9zdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogcmdiKDgwLCA3OSwgNzkpO1xyXG59XHJcblxyXG4uZGF0ZS1wb3N0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-list',
                templateUrl: './post-list.component.html',
                styleUrls: ['./post-list.component.css']
            }]
    }], function () { return [{ type: src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_1__["PostFirebaseService"] }]; }, null); })();


/***/ }),

/***/ "phdA":
/*!***********************************************!*\
  !*** ./src/app/page/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/account.service */ "xbHj");
/* harmony import */ var src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/account-firebase.service */ "A2T0");
/* harmony import */ var src_app_service_jwttoken_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/jwttoken.service */ "Cpxq");








class LoginComponent {
    constructor(router, accountService, accountFirebaseService, jwttokenService) {
        this.router = router;
        this.accountService = accountService;
        this.accountFirebaseService = accountFirebaseService;
        this.jwttokenService = jwttokenService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('duongakvip1@gmail.com'),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('duongnh'),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true)
        });
    }
    ngOnInit() {
    }
    submit() {
        const accountLogin = this.loginForm.getRawValue();
        // accountLogin.username = this.loginForm.get('username').value;
        // accountLogin.password = this.loginForm.get('password').value;
        // accountLogin.rememberMe = this.loginForm.get('rememberMe').value;
        // this.accountService.login(accountLogin).subscribe(
        //   token => {
        //     this.router.navigateByUrl('/duongnh/home');
        //   },
        //   function error(err): void{
        //     console.log(err);
        //   }
        // );
        this.accountFirebaseService.login(accountLogin).subscribe({
            next: (user) => {
                if (user) {
                    this.router.navigateByUrl('/duongnh/home');
                }
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log('Complete login');
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_4__["AccountFirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_jwttoken_service__WEBPACK_IMPORTED_MODULE_5__["JwttokenService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 1, consts: [[1, "full-background"], [1, "form-post", "form-login"], [1, "content-left"], [3, "formGroup", "ngSubmit"], [1, "title-form-login"], [1, "group"], ["type", "password", "formControlName", "password", 1, "input-text", "input-password"], ["type", "submit", 1, "btn-post"], ["type", "checkbox", "formControlName", "rememberMe", "name", "rememberMe", "id", "rememberMe"], ["for", "rememberMe"], [1, "example-pass"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter admin password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Default: 123123123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: [".form-login[_ngcontent-%COMP%] {\r\n    top: 0px;\r\n    padding-top: 70px;\r\n    \r\n}\r\n\r\n.content-left[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n}\r\n\r\n.group[_ngcontent-%COMP%] {\r\n    \r\n    align-items: flex-start;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.title-form-login[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.input-password[_ngcontent-%COMP%] {\r\n    \r\n    height: 27px;\r\n    margin-right: 20px;\r\n    color: #216672;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n}\r\n\r\n.example-pass[_ngcontent-%COMP%] {\r\n    color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTtJQUNSLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbG9naW4ge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cclxufVxyXG5cclxuLmNvbnRlbnQtbGVmdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZ3JvdXAge1xyXG4gICAgLyogd2lkdGg6IDI1JTsgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZS1mb3JtLWxvZ2luIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1wYXNzd29yZCB7XHJcbiAgICAvKiB3aWR0aDogMjAlOyAqL1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICMyMTY2NzI7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1wYXNzIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_4__["AccountFirebaseService"] }, { type: src_app_service_jwttoken_service__WEBPACK_IMPORTED_MODULE_5__["JwttokenService"] }]; }, null); })();


/***/ }),

/***/ "rNjr":
/*!*****************************************************************!*\
  !*** ./src/app/page/edit-post-page/edit-post-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditPostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostPageComponent", function() { return EditPostPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/post */ "S19W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/post-firebase.service */ "1+ss");
/* harmony import */ var _modules_posts_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/posts/post-add/post-add.component */ "aJmx");






class EditPostPageComponent {
    constructor(route, postFirebaseService
    // private postService: PostService
    ) {
        this.route = route;
        this.postFirebaseService = postFirebaseService;
        this.post = new _model_post__WEBPACK_IMPORTED_MODULE_1__["Post"]();
    }
    ngOnInit() {
        this.getPostEdit();
    }
    getPostEdit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.postFirebaseService.getPostById(id).subscribe(responsePost => {
            if (responsePost) {
                this.post = responsePost;
                console.log('idPost:' + id, this.post);
            }
        });
    }
}
EditPostPageComponent.ɵfac = function EditPostPageComponent_Factory(t) { return new (t || EditPostPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_3__["PostFirebaseService"])); };
EditPostPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPostPageComponent, selectors: [["app-edit-post-page"]], decls: 1, vars: 2, consts: [[3, "flagEdit", "postEditting"]], template: function EditPostPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-add", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flagEdit", true)("postEditting", ctx.post);
    } }, directives: [_modules_posts_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_4__["PostAddComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvZWRpdC1wb3N0LXBhZ2UvZWRpdC1wb3N0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPostPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-post-page',
                templateUrl: './edit-post-page.component.html',
                styleUrls: ['./edit-post-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_3__["PostFirebaseService"] }]; }, null); })();


/***/ }),

/***/ "tPnv":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/profile/profile-edit/profile-control-edit/profile-control-edit.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProfileControlEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileControlEditComponent", function() { return ProfileControlEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class ProfileControlEditComponent {
    constructor() {
        this.addItemForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteItemForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveUpItemForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveDownItemForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.icons = [_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSortUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSortDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMinus"]];
    }
    ngOnInit() {
    }
    moveUp() {
        const currentIndex = this.item.index;
        let newIndex = currentIndex;
        if (currentIndex > 0 && currentIndex < this.maxIndex) {
            newIndex = currentIndex - 1;
        }
        const indexObject = {
            oldIndex: currentIndex,
            newIndex
        };
        this.moveUpItemForm.emit(indexObject);
    }
    moveDown() {
        const currentIndex = this.item.index;
        let newIndex = currentIndex;
        if (currentIndex >= 0 && currentIndex < this.maxIndex - 1) {
            newIndex = currentIndex + 1;
        }
        const indexObject = {
            oldIndex: currentIndex,
            newIndex
        };
        this.moveDownItemForm.emit(indexObject);
    }
    add() {
        this.addItemForm.emit(this.item);
    }
    delete() {
        this.deleteItemForm.emit(this.item.index);
    }
}
ProfileControlEditComponent.ɵfac = function ProfileControlEditComponent_Factory(t) { return new (t || ProfileControlEditComponent)(); };
ProfileControlEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileControlEditComponent, selectors: [["app-profile-control-edit"]], inputs: { item: "item", maxIndex: "maxIndex" }, outputs: { addItemForm: "addItemForm", deleteItemForm: "deleteItemForm", moveUpItemForm: "moveUpItemForm", moveDownItemForm: "moveDownItemForm" }, decls: 13, vars: 4, consts: [[1, "control"], ["type", "button", 1, "__btn", "__move", 3, "click"], [2, "font-size", "16px", 3, "icon"], ["type", "button", 1, "__btn", "__add", 3, "click"], ["type", "button", 1, "__btn", "__delete", 3, "click"]], template: function ProfileControlEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileControlEditComponent_Template_button_click_1_listener() { return ctx.moveUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileControlEditComponent_Template_button_click_3_listener() { return ctx.moveDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileControlEditComponent_Template_button_click_5_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Th\u00EAm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileControlEditComponent_Template_button_click_9_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "X\u00F3a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons[3]);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".control[_ngcontent-%COMP%]{\r\n    \r\n    display: flex;\r\n    justify-content: flex-end;\r\n    position: absolute;\r\n    top: -30px;\r\n    right: 0px;\r\n    transition: all 0.5s;\r\n}\r\n\r\n.control[_ngcontent-%COMP%]   .__btn[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    outline: none;\r\n    border-style: none;\r\n    margin: 0 3px;\r\n    padding: 3px 15px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n    \r\n}\r\n\r\n.control[_ngcontent-%COMP%]   .__move[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    border: 1px solid #000;\r\n    color: #000;\r\n}\r\n\r\n.control[_ngcontent-%COMP%]   .__move[_ngcontent-%COMP%]:hover{\r\n    border: 1px solid rgb(35, 154, 233);\r\n    color: rgb(35, 154, 233);\r\n}\r\n\r\n.control[_ngcontent-%COMP%]   .__add[_ngcontent-%COMP%]{\r\n    background-color: #3cb371;\r\n}\r\n\r\n.control[_ngcontent-%COMP%]   .__add[_ngcontent-%COMP%]:hover{\r\n    background-color: #2a8251;\r\n}\r\n\r\n.control[_ngcontent-%COMP%]   .__delete[_ngcontent-%COMP%]{\r\n    background-color: #f15c4c;\r\n}\r\n\r\n.control[_ngcontent-%COMP%]   .__delete[_ngcontent-%COMP%]:hover{\r\n    background-color: #c4483b;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWNvbnRyb2wtZWRpdC9wcm9maWxlLWNvbnRyb2wtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWNvbnRyb2wtZWRpdC9wcm9maWxlLWNvbnRyb2wtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2x7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuLmNvbnRyb2wgLl9fYnRue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIDNweDtcclxuICAgIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXHJcbn1cclxuXHJcbi5jb250cm9sIC5fX21vdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uY29udHJvbCAuX19tb3ZlOmhvdmVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDM1LCAxNTQsIDIzMyk7XHJcbiAgICBjb2xvcjogcmdiKDM1LCAxNTQsIDIzMyk7XHJcbn1cclxuXHJcbi5jb250cm9sIC5fX2FkZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzY2IzNzE7XHJcbn1cclxuXHJcbi5jb250cm9sIC5fX2FkZDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTgyNTE7XHJcbn1cclxuXHJcbi5jb250cm9sIC5fX2RlbGV0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMTVjNGM7XHJcbn1cclxuXHJcbi5jb250cm9sIC5fX2RlbGV0ZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNDQ4M2I7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileControlEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-control-edit',
                templateUrl: './profile-control-edit.component.html',
                styleUrls: ['./profile-control-edit.component.css']
            }]
    }], function () { return []; }, { addItemForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteItemForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], moveUpItemForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], moveDownItemForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "u+AD":
/*!*********************************************************************!*\
  !*** ./src/app/page/post-detail-page/post-detail-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: PostDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailPageComponent", function() { return PostDetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/post */ "S19W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/post-firebase.service */ "1+ss");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/header/header.component */ "uU1w");
/* harmony import */ var _modules_posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/posts/post-detail/post-detail.component */ "R5or");







class PostDetailPageComponent {
    constructor(route, postFirebaseService
    // private postService: PostService
    ) {
        this.route = route;
        this.postFirebaseService = postFirebaseService;
        this.post = new _model_post__WEBPACK_IMPORTED_MODULE_1__["Post"]();
    }
    ngOnInit() {
        this.getPostById();
    }
    getPostById() {
        const id = this.route.snapshot.paramMap.get('id');
        this.postFirebaseService.getPostById(id).subscribe(responsePost => {
            this.post = responsePost;
            console.log(this.post, responsePost);
        });
    }
}
PostDetailPageComponent.ɵfac = function PostDetailPageComponent_Factory(t) { return new (t || PostDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_3__["PostFirebaseService"])); };
PostDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostDetailPageComponent, selectors: [["app-post-detail-page"]], decls: 2, vars: 6, consts: [[3, "flagHome", "heading", "subHeading", "urlImage", "dateCreate"], [3, "content"]], template: function PostDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-detail", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("flagHome", false)("heading", ctx.post.heading)("subHeading", ctx.post.subHeading)("urlImage", ctx.post.urlImage)("dateCreate", ctx.post.dateCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.post.content);
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _modules_posts_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_5__["PostDetailComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcG9zdC1kZXRhaWwtcGFnZS9wb3N0LWRldGFpbC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-detail-page',
                templateUrl: './post-detail-page.component.html',
                styleUrls: ['./post-detail-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_service_firebase_cloud_firestore_post_firebase_service__WEBPACK_IMPORTED_MODULE_3__["PostFirebaseService"] }]; }, null); })();


/***/ }),

/***/ "uU1w":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class HeaderComponent {
    constructor() {
        this.styleBinding = { 'background-image': 'url(../../../assets/img/home-bg.jpg)' };
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.initBackgroundImage();
    }
    initBackgroundImage() {
        if (this.urlImage) {
            this.styleBinding = { 'background-image': 'url(' + this.urlImage + ')' };
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { heading: "heading", subHeading: "subHeading", dateCreate: "dateCreate", urlImage: "urlImage", flagHome: "flagHome" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 16, consts: [[1, "header", "font-style", 3, "ngStyle"], [3, "hidden"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styleBinding);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.flagHome ? "content-header home-header" : "content-header post-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.flagHome ? "home-heading" : "post-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.flagHome ? "home-sub-heading" : "post-sub-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("post-meta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.flagHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 13, ctx.dateCreate, "MMMM d, y"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".header[_ngcontent-%COMP%] {\r\n    z-index: 0;\r\n    margin: 0px;\r\n    margin-bottom: -20px;\r\n    padding: 0px;\r\n    min-height: 550px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    position: relative;\r\n    top: -90px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    box-shadow: inset 0 0 0 2000px rgba(8, 8, 8, 0.5);\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] {\r\n    margin: 100px 0px;\r\n    \r\n    padding-top: 20px;\r\n    height: 100%;\r\n    width: 50%;\r\n    color: white;\r\n}\r\n\r\n.home-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.post-header[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] > p.home-heading[_ngcontent-%COMP%] {\r\n    font-size: 80px;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] > p.post-heading[_ngcontent-%COMP%] {\r\n    font-size: 55px;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] > p.home-sub-heading[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    font-size: 20px;\r\n    line-height: 1.1;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] > p.post-sub-heading[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    font-size: 30px;\r\n    line-height: 1.1;\r\n    margin: 10px 0 30px;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] > p.post-meta[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    font-style: italic;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    \r\n    .header[_ngcontent-%COMP%] {\r\n        margin-top: -90px;\r\n    }\r\n    .content-header[_ngcontent-%COMP%] > p.post-heading[_ngcontent-%COMP%] {\r\n        font-size: 45px;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJOzs7T0FHRztJQUNIO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7OztPQUdHO0FBQ1AiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTkwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDIwMDBweCByZ2JhKDgsIDgsIDgsIDAuNSk7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDEwMHB4IDBweDtcclxuICAgIC8qIHBhZGRpbmctdG9wOiAxMDBweDsgKi9cclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhvbWUtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlcj5wLmhvbWUtaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlcj5wLnBvc3QtaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlcj5wLmhvbWUtc3ViLWhlYWRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlcj5wLnBvc3Qtc3ViLWhlYWRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICBtYXJnaW46IDEwcHggMCAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1oZWFkZXI+cC5wb3N0LW1ldGEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLyogLm5hdmJhciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH0gKi9cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC05MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtaGVhZGVyPnAucG9zdC1oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICAvKiAubWVudS1iYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfSAqL1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, { heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subHeading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dateCreate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], urlImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flagHome: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/login/login.component */ "phdA");
/* harmony import */ var _page_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/about-page/about-page.component */ "YHtn");
/* harmony import */ var _page_edit_post_page_edit_post_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/edit-post-page/edit-post-page.component */ "rNjr");
/* harmony import */ var _page_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/home-page/home-page.component */ "dpsL");
/* harmony import */ var _page_new_post_page_new_post_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/new-post-page/new-post-page.component */ "PH3S");
/* harmony import */ var _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/page-not-found/page-not-found.component */ "2exP");
/* harmony import */ var _page_post_detail_page_post_detail_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/post-detail-page/post-detail-page.component */ "u+AD");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/default/default.component */ "xS3V");
/* harmony import */ var _layouts_amend_post_amend_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/amend-post/amend-post.component */ "YyNl");
/* harmony import */ var _page_edit_about_page_edit_about_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/edit-about-page/edit-about-page.component */ "Br0M");
/* harmony import */ var _interceptors_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./interceptors/auth.guard */ "fyVs");















const routes = [
    {
        path: 'duongnh',
        children: [
            {
                path: '',
                component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_9__["DefaultComponent"],
                children: [
                    { path: 'home', component: _page_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"] },
                    { path: 'about', component: _page_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"] },
                    { path: 'about/edit', component: _page_edit_about_page_edit_about_page_component__WEBPACK_IMPORTED_MODULE_11__["EditAboutPageComponent"], canActivate: [_interceptors_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
                    { path: 'post/detail/:id', component: _page_post_detail_page_post_detail_page_component__WEBPACK_IMPORTED_MODULE_8__["PostDetailPageComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                ]
            },
            {
                path: 'post',
                component: _layouts_amend_post_amend_post_component__WEBPACK_IMPORTED_MODULE_10__["AmendPostComponent"],
                children: [
                    { path: 'new', component: _page_new_post_page_new_post_page_component__WEBPACK_IMPORTED_MODULE_6__["NewPostPageComponent"] },
                    { path: 'edit/:id', component: _page_edit_post_page_edit_post_page_component__WEBPACK_IMPORTED_MODULE_4__["EditPostPageComponent"] },
                ],
                canActivate: [_interceptors_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
            }
        ]
    },
    { path: 'login', component: _page_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', redirectTo: 'duongnh', pathMatch: 'full' },
    { path: '**', component: _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xS3V":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/account */ "gGTi");
/* harmony import */ var src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/firebase-cloud-firestore/account-firebase.service */ "A2T0");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/navbar/navbar.component */ "iDpr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/footer/footer.component */ "acaO");







class DefaultComponent {
    constructor(
    // private accountService: AccountService
    accountFirebaseService) {
        this.accountFirebaseService = accountFirebaseService;
        this.account = new src_app_model_account__WEBPACK_IMPORTED_MODULE_1__["Account"]();
    }
    ngOnInit() {
        this.getLinkSocialNetworkById();
    }
    getLinkSocialNetworkById() {
        this.accountFirebaseService.getLinkSocialNetworkById().subscribe((res) => {
            this.account = res;
        });
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__["AccountFirebaseService"])); };
DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-default"]], decls: 3, vars: 4, consts: [[3, "urlGithub"], [3, "urlTwitter", "urlFacebook", "urlGithub"]], template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("urlGithub", ctx.account.github);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("urlTwitter", ctx.account.twitter)("urlFacebook", ctx.account.facebook)("urlGithub", ctx.account.github);
    } }, directives: [_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-default',
                templateUrl: './default.component.html',
                styleUrls: ['./default.component.css']
            }]
    }], function () { return [{ type: src_app_service_firebase_cloud_firestore_account_firebase_service__WEBPACK_IMPORTED_MODULE_2__["AccountFirebaseService"] }]; }, null); })();


/***/ }),

/***/ "xbHj":
/*!********************************************!*\
  !*** ./src/app/service/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _jwttoken_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwttoken.service */ "Cpxq");
/* harmony import */ var _mapping_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapping.service */ "Usy3");








class AccountService {
    constructor(http, jwttokenService, mappingServide) {
        this.http = http;
        this.jwttokenService = jwttokenService;
        this.mappingServide = mappingServide;
        this.URL_LOGIN_APP = '/authenticate';
        this.URL_GET_ACCOUNT = '/account/duongnh';
        this.URL_GET_ACCOUNT_LINK_SOCIAL_NETWORK = '/account/duongnh/link-social-network';
        this.URL_UPDATE_ACCOUNT = '/account';
        this.URL_REFRESH_TOKEN = '/refreshtoken';
        this.NAME_ACCOUNT_IN_STORAGE = 'accountCurrent';
        this.currentAccountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem(this.NAME_ACCOUNT_IN_STORAGE)));
        this.currentAccount = this.currentAccountSubject.asObservable();
    }
    get getCurrentAccountValue() {
        return this.currentAccountSubject.value;
    }
    getAccountByPhone() {
        const observableAccountConvert = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.URL_GET_ACCOUNT).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((account) => {
            if (account.status === 200) {
                const accountBE = account.body;
                account.body = this.mappingServide.mappingAccount(accountBE);
                return account;
            }
            return account;
        }));
        return observableAccountConvert;
    }
    getLinkSocialNetworkById() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.URL_GET_ACCOUNT_LINK_SOCIAL_NETWORK);
    }
    updateByUsername(account) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.URL_UPDATE_ACCOUNT, account);
    }
    login(accountLogin) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.URL_LOGIN_APP, accountLogin)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(tokenObj => {
            accountLogin.password = '';
            localStorage.setItem(this.NAME_ACCOUNT_IN_STORAGE, JSON.stringify(accountLogin));
            this.jwttokenService.addTokenInLocalStorage(tokenObj.id_token);
            this.currentAccountSubject.next(accountLogin);
            return tokenObj;
        }));
    }
    refreshToken() {
        const options = {
            headers: { isRefreshToken: 'true' }
        };
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.URL_REFRESH_TOKEN, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(tokenObj => {
            this.jwttokenService.addTokenInLocalStorage(tokenObj.id_token);
            return tokenObj;
        }));
    }
    logout() {
        localStorage.removeItem(this.NAME_ACCOUNT_IN_STORAGE);
        this.currentAccountSubject.next(null);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_jwttoken_service__WEBPACK_IMPORTED_MODULE_5__["JwttokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mapping_service__WEBPACK_IMPORTED_MODULE_6__["MappingService"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _jwttoken_service__WEBPACK_IMPORTED_MODULE_5__["JwttokenService"] }, { type: _mapping_service__WEBPACK_IMPORTED_MODULE_6__["MappingService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, Fragment) {
        "use strict";

        return Controller.extend("urlaubsplaner.urlaubsplaner.controller.Dashboard", {
            onInit: function () {
                this.oOwnerComponent = this.getOwnerComponent();
                this.oRouter = this.oOwnerComponent.getRouter();
                this.oRouter.attachRouteMatched(this.onRouteMatched, this);
                
                
                
                var oVacationModel = new sap.ui.model.json.JSONModel();
                var User = {
                    Username: "Mock",
                    VacationLeft: "0",
                    VacationPlaned: "20",
                    VacationLastYear: "10",
                    Role: "Teamleiter"
                }
                oVacationModel.setProperty("/User", User);
                this.getView().setModel(oVacationModel, "VacationModel");
                this.getView().getModel("VacationModel").setProperty("/Vacationleft", 0);
<<<<<<< HEAD
                //var userId = oRouter.getRoute("RouteDashboard").getParameter("userId");
=======
           
>>>>>>> 5df99ceda1830fefeb12af2e79283dc34746556c
                debugger;




                this.loadData();


            },
            onRouteMatched: function (oEvent) {
<<<<<<< HEAD
                 
                 var userId = oEvent.getParameter("arguments");
                 
                 
=======
                 var userId = oEvent.getParameter("arguments");
                 debugger;
                // var iBenutzerId = userId.iBenutzerId;
                // debugger;
>>>>>>> 5df99ceda1830fefeb12af2e79283dc34746556c
                /*
                var login = oEvent.getParameter("arguments");
               
                
                this.getView().getModel("VacationModel").setProperty("/User/Username", this.sBenutzerLogin);
                */



                this.setFirstDay();
                // this.getView().getModel("VacationModel").setProperty("/FirstDay", Date);


            },

            loadData: function () {
                /* var oModel = new sap.ui.model.json.JSONModel();
                // oModel.setData({
                //     people: [{
                //         pic: "",
                //         name: "111",
                //         role: "Teamleiter",
                //         freeDays: [5, 6],
                //         freeHours: [0, 1, 2, 3, 4, 5, 6, 17, 19, 20, 21, 22, 23],
                //         appointments: [{
                //             pic: "",
                //             title: "Urlaub",
                //             start: new Date(2023, 1, 1, 11, 30),
                //             end: new Date(2023, 2, 3, 11, 30),
                //             type: "Type03",
                //             tentative: true
                //         }]
                //     },
                //     {
                //         pic: "",
                //         name: "222",
                //         role: "Mitarbeiter",
                //         freeDays: [5, 6],
                //         freeHours: [0, 1, 2, 3, 4, 5, 6, 17, 19, 20, 21, 22, 23],
                //         appointments: [{
                //             pic: "",
                //             title: "Urlaub",
                //             start: new Date(2023, 1, 1, 11, 30),
                //             end: new Date(2023, 2, 3, 11, 30),
                //             type: "Type03",
                //             tentative: true
                //         }]
                //     },
                //     ]
                // });
                 this.getView().setModel(oModel, "oOwnModel");
                */
               
               
                // MOCK-Data Team
                var oTeamModel = new sap.ui.model.json.JSONModel();
                oTeamModel.setData({
                    people: [{
                        id: 3,
                        pic: "",
                        name: "3",
                        role: "Backoffice",
                        freeDays: [5, 6],
                        freeHours: [0, 1, 2, 3, 4, 5, 6, 17, 19, 20, 21, 22, 23],
                        appointments: [{
                            pic: "",
                            title: "Urlaub",
                            start: new Date(2023, 1, 1, 11, 30),
                            end: new Date(2023, 2, 3, 11, 30),
                            type: "Type03",
                            tentative: true
                        }],
                    },
                    {
                        id:4, 
                        pic: "",
                        name: "4",
                        role: "Teamleiter",
                        freeDays: [5, 6],
                        freeHours: [0, 1, 2, 3, 4, 5, 6, 17, 19, 20, 21, 22, 23],
                        appointments: [{
                            pic: "",
                            title: "Urlaub",
                            start: new Date(2023, 1, 1, 11, 30),
                            end: new Date(2023, 2, 3, 11, 30),
                            type: "Type03",
                            tentative: true
                        }],
                    },
                    {
                        id: 5,
                        pic: "",
                        name: "5",
                        role: "Mitarbeiter",
                        freeDays: [5, 6],
                        freeHours: [0, 1, 2, 3, 4, 5, 6, 17, 19, 20, 21, 22, 23],
                        appointments: [{
                            pic: "",
                            title: "Urlaub",
                            start: new Date(2023, 1, 1, 11, 30),
                            end: new Date(2023, 2, 3, 11, 30),
                            type: "Type03",
                            tentative: true
                        }],
                    },
                    ]
                });
                this.getView().setModel(oTeamModel, "oTeamModel");
            },

            onClick: function () {


                var oKalender = this.byId("PC1");
                oKalender.setStartDate(firstDayOfWeek);
            },


            getfirstDayOfWeek: function () {

                var today = new Date();
                var day = today.getDay();
                return new Date(today.getFullYear(), today.getMonth(), today.getDate() - day + 1);

            },

            onOpenDialog: function () {
                var oView = this.getView();
                // create dialog lazily
                if (!this.byId("vacationPickerDialog")) {
                    // load asynchronous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "urlaubsplaner.urlaubsplaner.view.dialogs.VacationDateDialog",
                        controller: this
                    }).then(function (oDialog) {
                        // connect dialog to the root view 
                        //of this component (models, lifecycle)
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    this.byId("vacationPickerDialog").open();
                }
            },

            closeDialog: function () {
                this.byId("vacationPickerDialog").close();
                this.byId("datePicker").setValue(null);
                this.byId("datePicker2").setValue(null);

            },


            sendVacation: function () {
                var sUrlaubStart = this.byId("datePicker").getDateValue();
                var sUrlaubEnde = this.byId("datePicker2").getDateValue();



                this.closeDialog();
                MessageToast.show(`Hallo ${this.getView().getModel("VacationModel").getProperty("/User/Username")}, du hast deinen Urlaubsantrag vom ${sUrlaubStart.toLocaleDateString()} bis zum ${sUrlaubEnde.toLocaleDateString()} abgeschickt`)


            },


            setFirstDay: function () {
                var Date = this.getfirstDayOfWeek();
                var oKalender = [];
                oKalender.push(this.byId("EmployeePC"));
                oKalender.push(this.byId("OwnPC"));
                oKalender.push(this.byId("TeamPC"));
                oKalender.forEach(element => {
                    element.setStartDate(Date);
                });

            },

            




        });
    });

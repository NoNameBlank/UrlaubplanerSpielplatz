sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("urlaubsplaner.urlaubsplaner.controller.Login", {
            onInit: function () {

            },
            handleClick: function () {
                //  var oRouter = sap.ui.core.UIComponent.getRouter();
                //         oRouter.navTo("RouteDashboard");

                this.loadData();//
                var sBenutzerLogin = this.byId("benutzerInput").getValue();
                var sBenutzerPasswort = this.byId("passwordInput").getValue();
            
                var userId = this.checkUserExist(sBenutzerLogin, sBenutzerPasswort);
              

                if (!userId) {
                    sap.m.MessageToast.show("BenutzerName oder Passwort falsch!");
                } else {
                                  
                    this.getOwnerComponent().getRouter().navTo("RouteDashboard", {
                         userId: userId 
                         
                        });
                        
                }


        






            },
            //DIe FUnktion soll später i Backend geladen werden
            checkUserExist: function (loginName, loginPasswort) {


                var oModel = this.getView().getModel("oUserModel");
                var aEntries = oModel.getProperty("/people");
                var oEntry = aEntries.find(function (oEntry) {
                  
                    return oEntry.name === loginName;
                });
                if (oEntry) {
                    if (oEntry.passwort === loginPasswort) {
                        return oEntry.id; //return
                        
                    } else {
                        return false;
                    }


                } else {

                    return false;
                }




            },


            loadData: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({
                    people: [{
                        id: 1,
                        pic: "",
                        name: "11",
                        passwort: "123",
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
                        }]
                    },
                    {
                        id: 2,
                        pic: "",
<<<<<<< HEAD
                        name: "12",
=======
                        name: "22",
>>>>>>> 5df99ceda1830fefeb12af2e79283dc34746556c
                        passwort: "321",
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
                        }]
                    },
                    ]
                });




                this.getView().setModel(oModel, "oUserModel");

            },

        });



    });

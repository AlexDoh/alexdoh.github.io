describe('Home page', () => {

  beforeEach(() => browser.get('http://localhost:3000/'));


  it('Should have a title', () => expect(browser.getTitle()).toEqual('AngularJS Client-Module permissions example'));

  it('Should have a default permissions count', () =>
    expect(element.all(by.repeater('permission in $ctrl.clientModulePermissions')).count()).toEqual(9)
  );

  it('Should add a permission', () => {
    element(by.css('[ng-model="$ctrl.selectedClient"]')).click();
    element.all(by.repeater('client in $ctrl.clients')).get(1).click();
    element(by.css('[ng-model="$ctrl.modulesForClient"]')).click();
    element.all(by.repeater('module in $ctrl.modules')).get(2).click();
    expect(element.all(by.repeater('permission in $ctrl.clientModulePermissions')).count()).toEqual(10);
  });

});
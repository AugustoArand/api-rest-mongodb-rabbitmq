describe('POST /users', () => {

  beforeEach(() => {
    cy.fixture('users').then(function (users) {
      this.users = users
    })
  })

  it('register a new user', function () {

    const user = this.users.create_user

    cy.task('deleteUser', user.email)
    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(200)
    })


  })


  it('duplicate email', function () {

    const user = this.users.duplicate_email

    cy.task('deleteUser', user.email)
    cy.postUser(user)

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(409)
    })



  })

  context('required fields', function () {
    let user;

    beforeEach(function () {
      user = this.users.required_fields
    })

    it('name is required', function () {

      delete user.name
      cy.postUser(user).then((response) => {
        expect(response.status).to.eq(400)
      })

    })

    it('email is required', function () {

      delete user.email
      cy.postUser(user).then((response) => {
        expect(response.status).to.eq(400)
      })

    })

    it('password is required', function () {

      delete user.password
      cy.postUser(user).then((response) => {
        expect(response.status).to.eq(400)
      })

    })
  })
})


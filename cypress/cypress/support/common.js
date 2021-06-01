/// <reference types="Cypress" />

import { AdminMenuPage } from "../page-objects/admin-menu-page";
import { LoginPage } from "../page-objects/login-page";

export function logInAsAdmin() {
    cy.fixture('validLogin').then((validLogin) => {
        let loginPage = new LoginPage();
        loginPage.navigate();
        loginPage.setUsername(validLogin.username);
        loginPage.setPassword(validLogin.password);
        loginPage.login();
    });
}

// export function createPostAndPublish(postTitle, postContent) {
//     let postListPage, newPostPage;   
//     let adminMenuPage = new AdminMenuPage()

//     postListPage = adminMenuPage.navigateToPosts();
//     newPostPage = postListPage.navigateToNewPost();
//     newPostPage.setPostTitle(postTitle);
//     newPostPage.setPostContent(postContent);
//     newPostPage.openPublishMenu();
//     newPostPage.publish();
//     newPostPage.navigateToPosts();
// }

export function createPostAndPublish(postTitle, postContent, screenshotProvider) {
    let postListPage, newPostPage;   
    let adminMenuPage = new AdminMenuPage()

    postListPage = adminMenuPage.navigateToPosts();
    cy.wait(1000);
    screenshotProvider.screenshot();
    newPostPage = postListPage.navigateToNewPost();
    cy.wait(1000);
    screenshotProvider.screenshot();
    newPostPage.setPostTitle(postTitle);
    cy.wait(1000);
    screenshotProvider.screenshot();
    newPostPage.setPostContent(postContent);
    cy.wait(1000);
    screenshotProvider.screenshot();
    newPostPage.openPublishMenu();
    cy.wait(1000);
    screenshotProvider.screenshot();
    newPostPage.publish();
    cy.wait(1000);
    screenshotProvider.screenshot();
    newPostPage.navigateToPosts();
}

// export function createDraftPost(postTitle, postContent) {
//     let postListPage, newPostPage;   
//     let adminMenuPage = new AdminMenuPage()   

//     postListPage = adminMenuPage.navigateToPosts();
//     newPostPage = postListPage.navigateToNewPost();
//     newPostPage.setPostTitle(postTitle);
//     newPostPage.setPostContent(postContent);
//     newPostPage.navigateToPosts();
// }

export function createDraftPost(postTitle, postContent, screenshotProvider) {
    let postListPage, newPostPage;   
    let adminMenuPage = new AdminMenuPage()   

    postListPage = adminMenuPage.navigateToPosts();
    cy.wait(1000);
    screenshotProvider.screenshot();
    newPostPage = postListPage.navigateToNewPost();
    cy.wait(1000);
    screenshotProvider.screenshot();
    newPostPage.setPostTitle(postTitle);
    cy.wait(1000);
    screenshotProvider.screenshot();
    newPostPage.setPostContent(postContent);
    cy.wait(1000);
    screenshotProvider.screenshot();
    newPostPage.navigateToPosts();
}

export class ScreenshotProvider {
    
    constructor(scenario) {
        this.scenario = scenario;
        this.count = 1;
    }

    screenshot() {
        cy.screenshot(`Scenario-${this.scenario}/Image-${this.count}`);
        this.count = this.count + 1;
    }
}
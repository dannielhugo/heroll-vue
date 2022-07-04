import { AuthService } from './auth.service';
import { CatalogService } from './catalog.service';
import { FirebaseService } from './firebase.service';
import { firestoreService } from './firestore.service';
import { GameService } from './game.service';
import { RawgService } from './rawg.service';

const firebase = new FirebaseService();
const catalog = new CatalogService();
const auth = new AuthService();
const game = new GameService();
const rawg = new RawgService();
const firestore = firestoreService();

export class Factory {
  static firebaseService() {
    return firebase;
  }

  static catalogService() {
    return catalog;
  }

  static authService() {
    return auth;
  }

  static firestoreService() {
    return firestore;
  }

  static rawgService() {
    return rawg;
  }

  static gameService() {
    return game;
  }
}
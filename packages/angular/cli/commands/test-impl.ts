/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { ArchitectCommand, ArchitectCommandOptions } from '../models/architect-command';

export class TestCommand extends ArchitectCommand {
  public readonly target = 'test';
  public readonly multiTarget = true;

  public async run(options: ArchitectCommandOptions) {
    return this.runArchitectTarget(options);
  }
}

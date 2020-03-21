// @flow
import { Trans } from '@lingui/macro';
import { I18n } from '@lingui/react';

import React from 'react';
import FlatButton from '../../../UI/FlatButton';
import Paper from '@material-ui/core/Paper';
import IconButton from '../../../UI/IconButton';
import Language from '@material-ui/icons/Language';
import BaseEditor from '../BaseEditor';
import Window from '../../../Utils/Window';
import { Line, Spacer } from '../../../UI/Grid';
import GDevelopLogo from './GDevelopLogo';
import ScrollBackground from './ScrollBackground';
import RaisedButton from '../../../UI/RaisedButton';
import Text from '../../../UI/Text';

const styles = {
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: 350,
  },
  centerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 400,
  },
  logoPaper: {
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
  },
};

class StartPage extends BaseEditor {
  constructor() {
    super();

    this.state = {
      aboutDialogOpen: false,
    };
  }

  getProject() {
    return undefined;
  }

  updateToolbar() {
    if (this.props.setToolbar) this.props.setToolbar(null);
  }

  forceUpdateEditor() {
    // No updates to be done
  }

  render() {
    const {
      project,
      canOpen,
      onOpen,
      onCreate,
      onOpenProjectManager,
      onCloseProject,
      onOpenAboutDialog,
      onOpenHelpFinder,
      onOpenLanguageDialog,
    } = this.props;

    return (
      <I18n>
        {({ i18n }) => (
          <ScrollBackground>
            <div style={styles.innerContainer}>
              <Line expand justifyContent="center">
                <div style={styles.centerContainer}>
                  <Paper
                    elevation={2}
                    style={{
                      ...styles.logoPaper,
                    }}
                  >
                    <GDevelopLogo />
                    <Text>
                      <Trans>
                        GDevelop is an easy-to-use game creator with no
                        programming language to learn.
                      </Trans>
                    </Text>
                  </Paper>
                  {!project && canOpen && (
                    <React.Fragment>
                      <RaisedButton
                        label={<Trans>Open a project</Trans>}
                        fullWidth
                        onClick={onOpen}
                        primary
                      />
                      <Spacer />
                    </React.Fragment>
                  )}
                  {!project && (
                    <React.Fragment>
                      <RaisedButton
                        label={<Trans>Create a new project</Trans>}
                        fullWidth
                        onClick={onCreate}
                        primary
                      />
                      <Spacer />
                    </React.Fragment>
                  )}
                  {!!project && (
                    <React.Fragment>
                      <RaisedButton
                        label={<Trans>Open Project Manager</Trans>}
                        fullWidth
                        onClick={onOpenProjectManager}
                        primary
                      />
                      <Spacer />
                    </React.Fragment>
                  )}
                  {!!project && (
                    <React.Fragment>
                      <FlatButton
                        label={<Trans>Close project</Trans>}
                        fullWidth
                        onClick={onCloseProject}
                      />
                      <Spacer />
                    </React.Fragment>
                  )}
                  {
                    <FlatButton
                      label={<Trans>Search the documentation</Trans>}
                      fullWidth
                      onClick={onOpenHelpFinder}
                    />
                  }
                </div>
              </Line>
              <Line alignItems="center" justifyContent="space-between">
                <Line>
                  <FlatButton
                    label={<Trans>About GDevelop</Trans>}
                    onClick={onOpenAboutDialog}
                  />
                  <FlatButton
                    label={<Trans>GDevelop Forums</Trans>}
                    onClick={() =>
                      Window.openExternalURL('https://forum.gdevelop-app.com')
                    }
                  />
                  <FlatButton
                    label={<Trans>Help and tutorials</Trans>}
                    onClick={() =>
                      Window.openExternalURL(
                        'http://wiki.compilgames.net/doku.php/gdevelop5/start'
                      )
                    }
                  />
                </Line>
                <Line alignItems="center">
                  <FlatButton
                    label={i18n.language}
                    onClick={onOpenLanguageDialog}
                    icon={<Language />}
                  />
                  <IconButton
                    className="icon-facebook"
                    onClick={() =>
                      Window.openExternalURL(
                        'https://www.facebook.com/GDevelopApp'
                      )
                    }
                  />
                  <IconButton
                    className="icon-twitter"
                    onClick={() =>
                      Window.openExternalURL('https://twitter.com/GDevelopApp')
                    }
                  />
                  <IconButton
                    className="icon-discord"
                    onClick={() =>
                      Window.openExternalURL('https://discord.gg/rjdYHvj')
                    }
                  />
                </Line>
              </Line>
            </div>
          </ScrollBackground>
        )}
      </I18n>
    );
  }
}

export default StartPage;

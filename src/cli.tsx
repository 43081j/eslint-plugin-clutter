import * as React from 'react';
import {render, Color, Text, Box} from 'ink';
import {scan} from './main';

interface CLIState {
  badDependencies: Record<string, string>;
  err?: string;
}

class CLI extends React.Component<{}, CLIState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      badDependencies: {}
    };
  }

  public async componentDidMount(): Promise<void> {
    try {
      const deps = await scan();
      this.setState({ badDependencies: deps });
    } catch (err) {
      this.setState({ err: err });
    }
  }

  public render(): React.ReactNode {
    if (this.state.err) {
      return (
        <Box>
          <Color red>Error:</Color>
          <Text>{this.state.err}</Text>
        </Box>
      );
    }

    const keys = Object.keys(this.state.badDependencies);

    if (keys.length > 0) {
      process.exitCode = 1;

      const items = keys
        .map((dep) => {
          const depMessage = this.state.badDependencies[dep];
          return (
            <Box key={dep} marginBottom={1}>
              <Box marginRight={1}>
                <Color bgRed white>FAIL</Color>
              </Box>
              <Box marginRight={1}>
                <Color dim white>{dep}</Color>
              </Box>
              <Box marginRight={1}>&raquo;</Box>
              <Box>{depMessage}</Box>
            </Box>
          );
        })

      const pluralised = keys.length > 1 ? 'dependencies' : 'dependency';

      return (
        <Box flexDirection="column">
          {items}
          <Box>
            <Color red>{keys.length} unnecessary {pluralised} detected.</Color>
          </Box>
        </Box>
      );
    }

    return (
      <Color green>No unnecessary dependencies detected.</Color>
    );
  }
}

render(<CLI/>);

import * as React from 'react';
import {render, Color, Text, Box} from 'ink';
import {scan} from './main';
import {packages} from './packages';

interface CLIState {
  badDependencies: Set<string>;
  err?: string;
}

class CLI extends React.Component<{}, CLIState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      badDependencies: new Set()
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

    if (this.state.badDependencies.size > 0) {
      process.exitCode = 1;

      const items = [...this.state.badDependencies]
        .map((dep) => {
          const depMessage = packages.get(dep);
          return (
            <Box key={dep}>
              <Color bgKeyword="red" white>{dep}</Color>
              <Text>{depMessage}</Text>
            </Box>
          );
        })

      return (
        <Box flexDirection="column">
          <Color red>Unnecessary dependencies detected:</Color>
          {items}
        </Box>
      );
    }

    return (
      <Color green>No unnecessary dependencies detected.</Color>
    );
  }
}

render(<CLI/>);

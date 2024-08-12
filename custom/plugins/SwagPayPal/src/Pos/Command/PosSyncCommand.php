<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Swag\PayPal\Pos\Command;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\Log\Package;
use Shopware\Core\System\SalesChannel\SalesChannelEntity;
use Swag\PayPal\Pos\Run\Task\CompleteTask;
use Symfony\Component\Console\Output\OutputInterface;

#[Package('checkout')]
class PosSyncCommand extends AbstractPosCommand
{
    protected static $defaultName = 'swag:paypal:pos:sync';

    protected static $defaultDescription = 'Sync to Zettle';

    private CompleteTask $completeTask;

    /**
     * @internal
     */
    public function __construct(
        EntityRepository $salesChannelRepository,
        CompleteTask $completeTask
    ) {
        parent::__construct($salesChannelRepository);
        $this->completeTask = $completeTask;
    }

    protected function executeForSalesChannel(SalesChannelEntity $salesChannel, OutputInterface $output, Context $context): void
    {
        $this->completeTask->execute($salesChannel, $context);
    }
}

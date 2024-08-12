<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagMigrationAssistant\Migration\Premapping;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\Log\Package;
use SwagMigrationAssistant\Migration\MigrationContextInterface;

#[Package('services-settings')]
interface PremappingReaderInterface
{
    public static function getMappingName(): string;

    /**
     * @param list<string> $entityGroupNames
     */
    public function supports(MigrationContextInterface $migrationContext, array $entityGroupNames): bool;

    public function getPremapping(Context $context, MigrationContextInterface $migrationContext): PremappingStruct;
}
